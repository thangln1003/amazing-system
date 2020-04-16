'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			firstName: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			lastName: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			email: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			normalizedEmail: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			username: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			normalizedUserName: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			passwordHash: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			isActive: {
				allowNull: false,
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			isDeleted: {
				allowNull: false,
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			lockoutEnabled: {
				allowNull: false,
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			accessFailedCount: {
				type: DataTypes.INTEGER,
			},
			lockoutEnd: {
				type: DataTypes.DATE,
			},
			deletedAt: {
				type: DataTypes.DATE,
			},
			createdBy: {
				type: DataTypes.STRING,
			},
			updatedBy: {
				type: DataTypes.STRING,
			},
			deletedBy: {
				type: DataTypes.STRING,
			},
		},
		{}
	);
	User.associate = function (models) {
		// associations can be defined here
	};
	return User;
};
