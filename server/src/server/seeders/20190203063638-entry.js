const models = require('../models/index');
const Accounts = models.Accounts;
const Contests = models.Contests;

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
        const contest1 = await Contests.findOne({
            where: {
                id: 1
            }
        });
        const contest2 = await Contests.findOne({
            where: {
                id: 2
            }
        });


        return queryInterface.bulkInsert('Entries', [
            {
                isWinner: false,
                text: 'First Entry',
                contestId: contest1.id,
                creatorId: user1.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                isWinner: false,
                text: 'Second Entry',
                contestId: contest1.id,
                creatorId: user2.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                isWinner: false,
                text: 'Third Entry',
                contestId: contest2.id,
                creatorId: user1.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
