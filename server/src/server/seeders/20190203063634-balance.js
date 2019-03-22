
const models = require('../models/index');
const Accounts = models.Accounts;

module.exports = {
    up: async (queryInterface, Sequelize) => {

        const user1 = await Accounts.findOne({
            where: {
                email: "justin@bieber.com"
            }
        });
        const user2 = await Accounts.findOne({
            where: {
                email: "justin2@bieber.com"
            }
        });
        const user3 = await Accounts.findOne({
            where: {
                email: "justin3@bieber.com"
            }
        });
        const user4 = await Accounts.findOne({
            where: {
                email: "justin4@bieber.com"
            }
        });


        return queryInterface.bulkInsert('Balances', [
            {
                balance: 100,
                userId: user1.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                balance: 100,
                userId: user2.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                balance: 100,
                userId: user3.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                balance: 100,
                userId: user4.id,
                createdAt: new Date(),
                updatedAt: new Date()
            }], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
