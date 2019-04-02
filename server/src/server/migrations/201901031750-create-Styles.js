module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Styles', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
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
        return queryInterface.dropTable('Styles');
    }
};