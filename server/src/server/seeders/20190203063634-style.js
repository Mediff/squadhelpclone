module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Styles', [
            {
                name: 'Funny',
                contestTypeId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Youthful',
                contestTypeId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Professional',
                contestTypeId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};