const express = require('express');
const router = express.Router();
const { User } = require('../../../db/models');
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and login
 */

/**
 * @swagger
 * /users:
 *  get:
 *    summary: Get list of users
 *    description: Use to request all users
 *    tags:
 *     - Users
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', async (req, res) => {
	try {
		const users = await User.findAll();

		return res.json(users);
	} catch (err) {
		res.status(500).send('Internal Server Error');
	}
});

/**
 * @swagger
 * /users:
 *  post:
 *    summary: Create user
 *    description: This can only be done by the logged in user.
 *    tags:
 *     - Users
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/', async (req, res) => {
	try {
		const { username, password, firstName, lastName, email } = req.body;

		let user = await User.findOne({
			where: { username, isDeleted: false },
		});

		if (user) {
			return res
				.status(404)
				.json({ errors: [{ msg: 'User already exists.' }] });
		}

		const passwordHash = password;

		const newUser = {
			username,
			passwordHash,
			firstName,
			lastName,
			email,
			normalizedUserName: username.toUpperCase(),
			normalizedEmail: email.toUpperCase(),
			isActive: true,
			createdBy: 'system',
		};

		const result = await User.create(newUser);
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

/**
 * @swagger
 * /users/{userId}:
 *  get:
 *    summary: Get a user by ID
 *    description: Returns a single user
 *    tags:
 *     - Users
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:userId', async (req, res) => {
	const userId = req.params.userId;
	const user = await User.findOne(userId);
	return res.json(user);
});

/**
 * @swagger
 * /users/{userId}:
 *  put:
 *    summary: Update user
 *    description: This can only be done by the logged in user.
 *    tags:
 *     - Users
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put('/{id}', (req, res) => User.updateById(req));

/**
 * @swagger
 * /users/{userId}:
 *  delete:
 *    summary: Delete user
 *    description: This can only be done by the logged in user.
 *    tags:
 *     - Users
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/{id}', (req, res) => User.deleteById(req.id));

module.exports = router;
