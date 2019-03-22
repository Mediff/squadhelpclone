'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Preferences', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			type:{
				type: Sequelize.TEXT,
				allowNull: false
			}
			,
			name:{
				type: Sequelize.TEXT,
				allowNull: false
			},
			contestTypeId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				onDelete: 'CASCADE',
				references: {
					model: 'ContestTypes',
					key: 'id'
				}
			},
			createdAt: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW
			},
			updatedAt: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Preferences');
	}
};
