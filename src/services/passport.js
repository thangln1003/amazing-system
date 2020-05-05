/* https://github.com/StephenGrider/FullstackReactCode/blob/master/server/services/passport.js */

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const { User, UserLogin, Sequelize } = require('../db/models');

passport.serializeUser(function (user, cb) {
	cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
	cb(null, obj);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true,
		},
		async (accessToken, refreshToken, profile, done) => {
			console.log('access_token', accessToken);
			console.log('refresh_token', refreshToken);
			console.log('profile:', profile);

			const email = profile.emails[0].value;
			const existingUser = await User.findOne({
				where: {
					email: email,
					isDeleted: false,
				},
				include: {
					model: UserLogin,
					where: {
						loginProvider: profile.provider,
						providerKey: profile.id,
					},
					required: true,
				},
			});

			if (!existingUser) {
				return done(null, {}, {
					message:
						'Sorry! Your email id is not found. Please contact to Admin.',
				});
			}

			done(null, existingUser);
		}
	)
);
