module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('NameTypes', [
            {
                name: 'Project',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Product',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Logo',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};