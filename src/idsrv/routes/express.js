const assert = require('assert').strict;
const crypto = require('crypto');
const { urlencoded } = require('express'); // eslint-disable-line import/no-unresolved
const { debug } = require('../utils/utils');

const Account = require('../support/account');
const body = urlencoded({ extended: false });

module.exports = (app, provider) => {
	const {
		constructor: {
			errors: { SessionNotFound },
		},
	} = provider;

	app.use((req, res, next) => {
		const orig = res.render;
		// you'll probably want to use a full blown render engine capable of layouts
		res.render = (view, locals) => {
			app.render(view, locals, (err, html) => {
				if (err) throw err;
				orig.call(res, '_layout', {
					...locals,
					body: html,
				});
			});
		};
		next();
	});

	function setNoCache(req, res, next) {
		res.set('Pragma', 'no-cache');
		res.set('Cache-Control', 'no-cache, no-store');
		next();
	}

	app.get('/interaction/:uid', setNoCache, async (req, res, next) => {
		try {
			const { uid, prompt, params, session } = await provider.interactionDetails(req, res);
			const { google } = provider.app.context;

			const client = await provider.Client.find(params.client_id);

			switch (prompt.name) {
				case 'select_account': {
					if (!session) {
						return provider.interactionFinished(req, res, { select_account: {} }, { mergeWithLastSubmission: false });
					}

					const account = await provider.Account.findAccount(undefined, session.accountId);
					const { email } = await account.claims('prompt', 'email', { email: null }, []);

					return res.render('select_account', {
						client,
						uid,
						email,
						details: prompt.details,
						params,
						title: 'Sign-in',
						session: session ? debug(session) : undefined,
						dbg: {
							params: debug(params),
							prompt: debug(prompt),
						},
					});
				}
				case 'login': {
					return res.render('login', {
						client,
						uid,
						details: prompt.details,
						params,
						title: 'Sign-in',
						google: google,
						session: session ? debug(session) : undefined,
						dbg: {
							params: debug(params),
							prompt: debug(prompt),
						},
					});
				}
				case 'consent': {
					return res.render('interaction', {
						client,
						uid,
						details: prompt.details,
						params,
						title: 'Authorize',
						session: session ? debug(session) : undefined,
						dbg: {
							params: debug(params),
							prompt: debug(prompt),
						},
					});
				}
				default:
					return undefined;
			}
		} catch (err) {
			return next(err);
		}
	});

	app.get('/interaction/callback/google', (req, res, next) =>
		res.render('repost', { layout: false, provider: 'google' })
	);

	app.post('/interaction/:uid/login', setNoCache, body, async (req, res, next) => {
		try {
			const {
				prompt: { name },
			} = await provider.interactionDetails(req, res);
			assert.strictEqual(name, 'login');
			const account = await Account.findByLogin(req.body.login);

			const result = {
				select_account: {}, // make sure its skipped by the interaction policy since we just logged in
				login: {
					account: account.accountId,
				},
			};

			await provider.interactionFinished(req, res, result, {
				mergeWithLastSubmission: false,
			});
		} catch (err) {
			next(err);
		}
	});

	app.post('/interaction/:uid/federated', body, async (req, res, next) => {
		const {
			prompt: { name },
			uid,
		} = await provider.interactionDetails(req, res);
		const { google } = provider.app.context;

		assert.strictEqual(name, 'login');

		const path = `/interaction/${uid}/federated`;

		switch (req.body.provider) {
			case 'google': {
				const callbackParams = google.callbackParams(req);

				// init
				if (!Object.keys(callbackParams).length) {
					const state = `${uid}|${crypto.randomBytes(32).toString('hex')}`;
					const nonce = crypto.randomBytes(32).toString('hex');

					res.cookie('google.state', state, { path, sameSite: 'strict' });
					res.cookie('google.nonce', nonce, { path, sameSite: 'strict' });

					return res.redirect(
						google.authorizationUrl({
							state,
							nonce,
							scope: 'openid email profile',
						})
					);
				}

				// callback
				const state = req.cookies['google.state'];
				res.cookie('google.state', null, { path });
				const nonce = req.cookies['google.nonce'];
				res.cookie('google.nonce', null, { path });

				const tokenset = await google.callback(undefined, callbackParams, { state, nonce, response_type: 'id_token' });
				const account = await Account.findByFederated('google', tokenset.claims());

				const result = {
					select_account: {}, // make sure its skipped by the interaction policy since we just logged in
					login: {
						account: account.accountId,
					},
				};
				return provider.interactionFinished(req, res, result, {
					mergeWithLastSubmission: false,
				});
			}
			default:
				return undefined;
		}
	});

	app.post('/interaction/:uid/continue', setNoCache, body, async (req, res, next) => {
		try {
			const interaction = await provider.interactionDetails(req, res);
			const {
				prompt: { name, details },
			} = interaction;
			assert.equal(name, 'select_account');

			if (req.body.switch) {
				if (interaction.params.prompt) {
					const prompts = new Set(interaction.params.prompt.split(' '));
					prompts.add('login');
					interaction.params.prompt = [...prompts].join(' ');
				} else {
					interaction.params.prompt = 'login';
				}
				await interaction.save();
			}

			const result = { select_account: {} };
			await provider.interactionFinished(req, res, result, {
				mergeWithLastSubmission: false,
			});
		} catch (err) {
			next(err);
		}
	});

	app.post('/interaction/:uid/confirm', setNoCache, body, async (req, res, next) => {
		try {
			const {
				prompt: { name, details },
			} = await provider.interactionDetails(req, res);
			assert.equal(name, 'consent');

			const consent = {};

			// any scopes you do not wish to grant go in here
			//   otherwise details.scopes.new.concat(details.scopes.accepted) will be granted
			consent.rejectedScopes = [];

			// any claims you do not wish to grant go in here
			//   otherwise all claims mapped to granted scopes
			//   and details.claims.new.concat(details.claims.accepted) will be granted
			consent.rejectedClaims = [];

			// replace = false means previously rejected scopes and claims remain rejected
			// changing this to true will remove those rejections in favour of just what you rejected above
			consent.replace = false;

			const result = { consent };
			await provider.interactionFinished(req, res, result, {
				mergeWithLastSubmission: true,
			});
		} catch (err) {
			next(err);
		}
	});

	app.get('/interaction/:uid/abort', setNoCache, async (req, res, next) => {
		try {
			const result = {
				error: 'access_denied',
				error_description: 'End-User aborted interaction',
			};
			await provider.interactionFinished(req, res, result, {
				mergeWithLastSubmission: false,
			});
		} catch (err) {
			next(err);
		}
	});

	app.use((err, req, res, next) => {
		if (err instanceof SessionNotFound) {
			// handle interaction expired / session not found error
		}
		next(err);
	});
};
