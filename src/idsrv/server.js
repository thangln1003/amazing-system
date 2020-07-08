const path = require('path');
const url = require('url');
const set = require('lodash/set');
const express = require('express');
const helmet = require('helmet');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const { Provider } = require('oidc-provider');

const Account = require('./support/account');
const configuration = require('./support/configuration');
const routes = require('./routes/express');

const { GOOGLE_CLIENT_ID, PORT = 5001, ISSUER = `http://localhost:${PORT}` } = process.env;
configuration.findAccount = Account.findAccount;

const app = express();
app.use(helmet());
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', '_layout.ejs');
app.use(expressLayouts);

let server;
(async () => {
	let adapter;
	// if (process.env.MONGODB_URI) {
	adapter = require('./adapters/sequelize'); // eslint-disable-line global-require
	await adapter.connect();
	// }

	const provider = new Provider(ISSUER, { adapter, ...configuration });

	if (GOOGLE_CLIENT_ID) {
		const openid = require('openid-client'); // eslint-disable-line global-require, import/no-unresolved
		const google = await openid.Issuer.discover('https://accounts.google.com/.well-known/openid-configuration');
		const googleClient = new google.Client({
			client_id: GOOGLE_CLIENT_ID,
			response_types: ['id_token'],
			redirect_uris: [`${ISSUER}/interaction/callback/google`],
			grant_types: ['implicit'],
		});
		provider.app.context.google = googleClient;
	}

	// https://github.com/panva/node-oidc-provider/blob/master/recipes/implicit_http_localhost.md
	const { invalidate: orig } = provider.Client.Schema.prototype;
	provider.Client.Schema.prototype.invalidate = function invalidate(message, code) {
		if (code === 'implicit-force-https' || code === 'implicit-forbid-localhost') {
			return;
		}

		orig.call(this, message);
	};

	// don't wanna re-bundle the interactions so just insert the login amr and acr as static whenever
	// login is submitted, usually you would submit them from your interaction
	const { interactionFinished } = provider;
	provider.interactionFinished = (...args) => {
		const { login } = args[2];
		if (login) {
			Object.assign(args[2].login, {
				acr: 'urn:mace:incommon:iap:bronze',
				amr: login.account.startsWith('google.') ? ['google'] : ['pwd'],
			});
		}

		return interactionFinished.call(provider, ...args);
	};

	if (process.env.NODE_ENV === 'production') {
		app.enable('trust proxy');
		provider.proxy = true;
		set(configuration, 'cookies.short.secure', true);
		set(configuration, 'cookies.long.secure', true);

		app.use((req, res, next) => {
			if (req.secure) {
				next();
			} else if (req.method === 'GET' || req.method === 'HEAD') {
				res.redirect(
					url.format({
						protocol: 'https',
						host: req.get('host'),
						pathname: req.originalUrl,
					})
				);
			} else {
				res.status(400).json({
					error: 'invalid_request',
					error_description: 'do yourself a favor and only use https',
				});
			}
		});
	}

	routes(app, provider);
	app.use(provider.callback);
	server = app.listen(PORT, () => {
		console.log(`application is listening on port ${PORT}, check its /.well-known/openid-configuration`);
	});
})().catch((err) => {
	if (server && server.listening) server.close();
	console.error(err);
	process.exitCode = 1;
});
