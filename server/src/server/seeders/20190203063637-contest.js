
const models = require('../models/index');
const Accounts = models.Accounts;
const ContestTypes = models.ContestTypes;
const CombinedContests = models.CombinedContests;

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
        const logo = await ContestTypes.findOne({
            where: {
                name: "Logo Contest"
            }
        });
        const tagline = await ContestTypes.findOne({
            where: {
                name: "Tagline Contest"
            }
        });
        const name = await ContestTypes.findOne({
            where: {
                name: "Name Contest"
            }
        });

        const contest1 = await CombinedContests.findOne({
            where: {
                id: 1
            }
        });
        const contest2 = await CombinedContests.findOne({
            where: {
                id: 2
            }
        });


        return queryInterface.bulkInsert('Contests', [
            {
                title: 'FirstContest',
                ventureName: 'Venture',
                ventureDescribe: 'Describe',
                customerDescribe: 'Describe',
                file: 'filePath',
                priority: 1,
                contestCreatorId: user1.id,
                contestTypeId: logo.id,
                combinedContestId: contest1.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'SecondContest',
                ventureName: 'Venture',
                ventureDescribe: 'Describe',
                customerDescribe: 'Describe',
                file: 'filePath',
                priority: 1,
                contestCreatorId: user1.id,
                contestTypeId: name.id,
                combinedContestId: contest1.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'ThirdContest',
                ventureName: 'Venture',
                ventureDescribe: 'Describe',
                customerDescribe: 'Describe',
                file: 'filePath',
                priority: 1,
                contestCreatorId: user2.id,
                contestTypeId: tagline.id,
                combinedContestId: contest2.id,
                createdAt: new Date(),
                updatedAt: new Date()
            }
         ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
