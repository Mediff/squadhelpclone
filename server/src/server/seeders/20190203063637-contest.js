
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
                ventureDescribe: 'Describe',
                customerDescribe: 'Describe',
                file: 'filePath',
                priority: 1,
                contestCreatorId: user1.id,
                winnerId: user2.id,
                contestTypeId: 3,
                styles: ['funny', 'youthful'],
                contestGroup: uuidV4(),
                prize: 500,
                industryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'SecondContest',
                ventureDescribe: 'Describe',
                customerDescribe: 'Describe',
                file: 'filePath',
                priority: 1,
                contestCreatorId: user1.id,
                winnerId: user2.id,
                contestTypeId: 1,
                styles: ['any', 'playful'],
                contestGroup: uuidV4(),
                prize: 200,
                industryId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'ThirdContest',
                ventureDescribe: 'Describe',
                customerDescribe: 'Describe',
                file: 'filePath',
                priority: 1,
                contestCreatorId: user2.id,
                winnerId: user2.id,
                contestTypeId: 2,
                styles: ['professional', 'youth'],
                contestGroup: uuidV4(),
                prize: 300,
                industryId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'FourthContest',
                ventureDescribe: 'Describe',
                customerDescribe: 'Describe',
                file: 'filePath',
                priority: 1,
                contestCreatorId: user2.id,
                winnerId: null,
                contestTypeId: 1,
                styles: ['professional', 'youth'],
                contestGroup: uuidV4(),
                prize: 300,
                industryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'FourthContest',
                ventureDescribe: 'Describe',
                customerDescribe: 'Describe',
                file: 'filePath',
                priority: 1,
                contestCreatorId: user2.id,
                winnerId: null,
                contestTypeId: 2,
                styles: ['professional', 'youth'],
                contestGroup: uuidV4(),
                prize: 300,
                industryId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }
         ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
