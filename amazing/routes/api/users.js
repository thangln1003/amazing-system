const express = require('express');
const router = express.Router();
const { User } = require('../../db/models');

// @route   GET api/users
// @desc    Test route
// @acess   Public
router.get('/', (req, res) => {
	try {
		return User.findAll().then((users) => res.json(users));
	} catch (err) {
		res.status(500).send('Internal Server Error');
	}
});

router.post('/', [], async (req, res) => {
	try {
		const { username, password, firstName, lastName, email } = req.body;

		let user = await User.findOne({ where: { username, isDeleted: false } });
		if (user) {
			return res.status(404).json({ errors: [{ msg: 'User already exists.' }] });
		}

		const result = await User.create({
			username,
			password,
			firstName,
			lastName,
			email,
			isActive: true,
		});

		const payload = {
			user: {
				id: result.id,
			},
		};

		return res.json(payload);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ errors: [{ msg: 'Server error.' }] });
	}
});

router.get('/:userId', (req, res) => {
	const userId = req.params.userId;
	User.find(userId).success((user) => {
		return res.json(user);
	});
});

// router.put('/{id}', (req, res) => User.updateById(req));

// router.delete('/{id}', (req, res) => User.deleteById(req.id));

module.exports = router;
