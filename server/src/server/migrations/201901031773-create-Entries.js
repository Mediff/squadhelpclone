'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Entries', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			creatorId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				onDelete: 'CASCADE',
				references: {
					model: 'Accounts',
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
			isWinner: {
				type: Sequelize.BOOLEAN,
				default: null
			},
			text: {
				type: Sequelize.TEXT,
				allowNull: false
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
		return queryInterface.dropTable('Entries');
	}
};
