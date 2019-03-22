'use strict';

module.exports = (sequelize, DataTypes) => {
	const Visitor = sequelize.define('Visitor', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			onDelete: 'CASCADE',
			references: {
				key: 'id',
				model: 'Users'
			}
		},
		visitorId: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	});
	Visitor.associate = function (models) {
		Visitor.belongsTo(models.User, {foreignKey: 'userId', sourceKey: 'id'});
	};
	return Visitor;
};
