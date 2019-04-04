'use strict';
const uuidV4 = require('uuid/v4');

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
            winnerId: {
                type: Sequelize.INTEGER,
                allowNull: true,
                onDelete: 'CASCADE',
                references: {
                    model: 'Accounts',
                    key: 'id'
                }
            },
            contestTypeId: {
                type: Sequelize.INTEGER,
                allowNull: true,
                onDelete: 'CASCADE',
                references: {
                    model: 'ContestTypes',
                    key: 'id'
                }
            },
            industryId: {
                type: Sequelize.INTEGER,
                allowNull: true,
                onDelete: 'CASCADE',
                references: {
                    model: 'Industries',
                    key: 'id'
                }
            },
            contestGroup: {
                type: Sequelize.UUID,
                defaultValue: uuidV4()
            },
            file: {
                type: Sequelize.STRING
            },
            priority: {
                type: Sequelize.INTEGER
            },
            prize: {
                type: Sequelize.INTEGER
            },
            styles: {
                type: Sequelize.ARRAY(Sequelize.TEXT)
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
