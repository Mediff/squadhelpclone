'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Contests', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            ventureName: {
                type: Sequelize.TEXT
            },
            ventureDescribe: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            customerDescribe: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            contestCreatorId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: 'Accounts',
                    key: 'id'
                }
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
            combinedContestId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: 'CombinedContests',
                    key: 'id'
                }
            },
            file: {
                type: Sequelize.STRING
            },
            priority: {
                type: Sequelize.INTEGER
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
        return queryInterface.dropTable('Contests');
    }
};
