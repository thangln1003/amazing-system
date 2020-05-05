const express = require('express');
const passport = require('passport');
const router = express.Router();
const logger = require('../../../config/winston');

router.get(
	'/google',
	passport.authenticate('google', {
		scope: ['profile', 'email'],
	})
);

router.get(
	'/google/callback',
	passport.authenticate('google', {
		failureRedirect: 'http://localhost:3000',
	}),
	(req, res) => {
		logger.info('Google Callback Successful');
		// Successful authentication, redirect home.
		res.redirect('http://localhost:3000/admin/roles');
	}
);

module.exports = router;
