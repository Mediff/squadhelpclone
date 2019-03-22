'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			firstName: {
				type: Sequelize.STRING,
				allowNull: false
			},
			lastName: {
				type: Sequelize.STRING,
				allowNull: false
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true
				}
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			profilePicture: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			status: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			gender: {
				type: Sequelize.STRING,
				allowNull: false
			},
			age: {
				type: Sequelize.BIGINT,
				allowNull: false,
				isAdult(value) {
					let date = moment()
						.subtract(18, 'years')
						.unix();
					date = moment(date).diff(value);
					if (date <= 0) {
						throw  new Error('You must be older then 18 years');
					}
				}
			},
			role: {
				type: Sequelize.INTEGER,
				allowNull: false,
				defaultValue: 0,
				validate: {
					allowNull: false,
					max: 2,
					min: 0,
				}
			},
			isActive: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: true,
			},
			isBanned: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
			intention: {
				type: Sequelize.STRING,
				allowNull: false
			},
			children: {
				type: Sequelize.INTEGER
			},
			height: {
				type: Sequelize.INTEGER
			},
			weight: {
				type: Sequelize.INTEGER
			},
			city: {
				type: Sequelize.STRING,
				allowNull: false
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Users');
	}
};
