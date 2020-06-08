const Sequelize = require('sequelize'); // eslint-disable-line import/no-unresolved

const sequelize = new Sequelize('amazing-db', 'admin', 'sa@123', {
	host: '127.0.0.1',
	dialect: 'postgres',
});

const grantable = new Set([
	'AccessToken',
	'AuthorizationCode',
	'RefreshToken',
	'DeviceCode',
]);

const models = [
	'Session',
	'AccessToken',
	'AuthorizationCode',
	'RefreshToken',
	'DeviceCode',
	'ClientCredentials',
	'Client',
	'InitialAccessToken',
	'RegistrationAccessToken',
	'Interaction',
	'ReplayDetection',
	'PushedAuthorizationRequest',
].reduce((map, name) => {
	map.set(
		name,
		sequelize.define(name, {
			id: { type: Sequelize.STRING, primaryKey: true },
			...(grantable.has(name)
				? { grantId: { type: Sequelize.STRING } }
				: undefined),
			...(name === 'DeviceCode'
				? { userCode: { type: Sequelize.STRING } }
				: undefined),
			...(name === 'Session'
				? { uid: { type: Sequelize.STRING } }
				: undefined),
			data: { type: Sequelize.JSONB },
			expiresAt: { type: Sequelize.DATE },
			consumedAt: { type: Sequelize.DATE },
		})
	);

	return map;
}, new Map());

class SequelizeAdapter {
	constructor(name) {
		this.model = models.get(name);
		this.name = name;
	}

	async upsert(id, data, expiresIn) {
		await this.model.upsert({
			id,
			data,
			...(data.grantId ? { grantId: data.grantId } : undefined),
			...(data.userCode ? { userCode: data.userCode } : undefined),
			...(data.uid ? { uid: data.uid } : undefined),
			...(expiresIn
				? { expiresAt: new Date(Date.now() + expiresIn * 1000) }
				: undefined),
		});
	}

	async find(id) {
		const found = await this.model.findByPk(id);
		if (!found) return undefined;
		return {
			...found.data,
			...(found.consumedAt ? { consumed: true } : undefined),
		};
	}

	async findByUserCode(userCode) {
		const found = await this.model.findOne({ where: { userCode } });
		if (!found) return undefined;
		return {
			...found.data,
			...(found.consumedAt ? { consumed: true } : undefined),
		};
	}

	async findByUid(uid) {
		const found = await this.model.findOne({ where: { uid } });
		if (!found) return undefined;
		return {
			...found.data,
			...(found.consumedAt ? { consumed: true } : undefined),
		};
	}

	async destroy(id) {
		await this.model.destroy({ where: { id } });
	}

	async consume(id) {
		await this.model.update({ consumedAt: new Date() }, { where: { id } });
	}

	async revokeByGrantId(grantId) {
		await this.model.destroy({ where: { grantId } });
	}

	static async connect() {
		return sequelize.sync();
	}
}

module.exports = SequelizeAdapter;
