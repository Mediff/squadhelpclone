module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Industries', [
            {
                name: 'Automotive',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Beauty',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Beer & Beverages',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};