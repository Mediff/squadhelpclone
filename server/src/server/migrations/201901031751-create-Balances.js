'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Balances', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			userId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				onDelete: 'CASCADE',
				references: {
					model: 'Accounts',
					key: 'id'
				}
			},
			balance: {
				type: Sequelize.DECIMAL(10,2),
				defaultValue: 0
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
		return queryInterface.dropTable('Balances');
	}
};
