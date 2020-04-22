const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const { User, UserLogin } = require('../db/models');

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
		},
		(accessToken, refreshToken, profile, cb) => {
			console.log('access_token', accessToken);
			console.log('refresh_token', refreshToken);
			console.log('profile:', profile);
		}
	)
);
