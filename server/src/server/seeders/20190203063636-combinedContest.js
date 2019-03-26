

module.exports = {
    up: async (queryInterface, Sequelize) => {


        return queryInterface.bulkInsert('CombinedContests', [
            {
                prize: 200,
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                prize: 300,
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                prize: 400,
                isActive: false,
                createdAt: new Date(),
                updatedAt: new Date()
            }
         ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
