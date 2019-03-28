
const models = require('../models/index');
const uuidV4 = require('uuid/v4');
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



        return queryInterface.bulkInsert('Contests', [
            {
                title: 'FirstContest',
                ventureName: 'Venture',
                ventureDescribe: 'Describe',
                customerDescribe: 'Describe',
                file: 'filePath',
                priority: 1,
                contestCreatorId: user1.id,
                winnerId: user2.id,
                type: 'logo',
                styles: ['funny', 'youthful'],
                contestGroup: uuidV4(),
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
                winnerId: user2.id,
                type: 'name',
                styles: ['any', 'playful'],
                contestGroup: uuidV4(),
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
                winnerId: user2.id,
                type: 'tagline',
                styles: ['professional', 'youth'],
                contestGroup: uuidV4(),
                createdAt: new Date(),
                updatedAt: new Date()
            }
         ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
