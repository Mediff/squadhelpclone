module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('ContestTypes', {
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
            image: {
                type: Sequelize.STRING
            },
            imageHover: {
                type: Sequelize.STRING
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
        return queryInterface.dropTable('ContestTypes');
    }
};