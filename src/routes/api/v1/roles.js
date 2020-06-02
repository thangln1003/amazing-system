const express = require('express');
const router = express.Router();
const { Role } = require('../../../db/models');
const {
	calculateLimitAndOffset,
	paginate,
} = require('../../../utils/paginate-info');

/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: Role management
 */

/**
 * @swagger
 * /roles:
 *  get:
 *    summary: Get list of roles
 *    description: Use to request all roles
 *    tags:
 *     - Roles
 *    parameters:
 *     - in: query
 *       name: page
 *     - in: query
 *       name: pageSize
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', async (req, res) => {
	try {
		const {
			query: { page, pageSize },
		} = req;
		const { limit, offset } = calculateLimitAndOffset(page, pageSize);
		const selectedFields = [
			'id',
			'name',
			'description',
			'createdAt',
			'createdBy',
		];

		const { count, rows } = await Role.findAndCountAll({
			where: { isDeleted: false },
			attributes: [...selectedFields],
			offset,
			limit,
		});

		const paginationInfo = paginate(page, count, rows);

		await sleep(3000);

		return res.status(200).json({
			success: true,
			result: rows,
			meta: paginationInfo,
		});
	} catch (err) {
		res.status(500).send(`Internal Server Error - ${err.message}`);
	}
});

/**
 * @swagger
 * /roles:
 *  get:
 *    summary: Get specific role
 *    description: Use to request specific role
 *    tags:
 *     - Roles
 *    parameters:
 *     - in: query
 *       name: page
 *     - in: query
 *       name: pageSize
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:name', async (req, res) => {
	debugger;
	try {
		const name = req.params.name;
		const selectedFields = [
			'id',
			'name',
			'description',
			'createdAt',
			'createdBy',
			'updatedAt',
			'updatedBy',
		];

		const role = await Role.findOne({
			where: { isDeleted: false, name },
			attributes: [...selectedFields],
		});

		if (!role) {
			return res
				.status(404)
				.json({ errors: [{ msg: 'Role does not exist.' }] });
		}

		return res.status(200).json({
			success: true,
			result: role,
		});
	} catch (err) {
		res.status(500).send(`Internal Server Error - ${err.message}`);
	}
});

/**
 * @swagger
 * /roles:
 *  post:
 *    summary: Create role
 *    description: This can only be done by the logged in user.
 *    tags:
 *     - Roles
 *    responses:
 *      '201':
 *        description: A successful response
 */
router.post('/', async (req, res) => {
	try {
		const { name, description } = req.body;

		let role = await Role.findOne({
			where: { name, isDeleted: false },
		});

		if (role) {
			return res
				.status(404)
				.json({ errors: [{ msg: 'Role already exists.' }] });
		}

		const newRole = {
			name,
			description,
			createdBy: 'system',
		};

		const result = await Role.create(newRole);
		const payload = {
			role: {
				id: result.id,
			},
		};

		return res.status(201).json(payload);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ errors: [{ msg: 'Server error.' }] });
	}
});

function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

module.exports = router;
