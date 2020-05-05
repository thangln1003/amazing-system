'use strict';
module.exports = (sequelize, DataTypes) => {
	const UserLogin = sequelize.define(
		'UserLogin',
		{
			id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			loginProvider: {
				type: DataTypes.STRING(128),
			},
			providerKey: {
				type: DataTypes.STRING(128),
			},
			userId: {
				type: DataTypes.UUID,
			},
		},
		{}
	);
	UserLogin.associate = function (models) {
		// associations can be defined here
		UserLogin.belongsTo(models.User);
	};
	return UserLogin;
};
