

module.exports = {
    up: async (queryInterface, Sequelize) => {


        return queryInterface.bulkInsert('CombinedContests', [
            {
                prize: 200,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                prize: 300,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                prize: 400,
                createdAt: new Date(),
                updatedAt: new Date()
            }
         ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
