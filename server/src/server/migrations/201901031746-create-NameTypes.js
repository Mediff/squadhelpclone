module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('NameTypes', {
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
        return queryInterface.dropTable('NameTypes');
    }
};