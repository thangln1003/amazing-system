'use strict';
module.exports = (sequelize, DataTypes) => {
	const UserLogin = sequelize.define(
		'UserLogin',
		{
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
	};
	return UserLogin;
};
