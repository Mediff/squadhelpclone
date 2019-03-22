'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('ContestsToPreferences', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			preferenceId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				onDelete: 'CASCADE',
				references: {
					model: 'Preferences',
					key: 'id'
				}
			},
			contestId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				onDelete: 'CASCADE',
				references: {
					model: 'Contests',
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
		return queryInterface.dropTable('ContestsToPreferences');
	}
};
