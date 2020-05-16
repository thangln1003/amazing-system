'use strict';
module.exports = (sequelize, DataTypes) => {
	const Role = sequelize.define(
		'Role',
		{
			id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			name: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			description: {
				allowNull: true,
				type: DataTypes.STRING,
			},
			isDeleted: {
				allowNull: false,
				type: DataTypes.BOOLEAN,
				defaultValue: false,
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
	Role.associate = function (models) {
		// associations can be defined here
	};
	return Role;
};
