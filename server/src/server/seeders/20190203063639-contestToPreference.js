const models = require('../models/index');
const Preferences = models.Preferences;
const Contests = models.Contests;

module.exports = {
    up: async (queryInterface, Sequelize) => {

        const preference1 = await Preferences.findOne({
            where: {
                id: 1
            }
        });
        const preference2 = await Preferences.findOne({
            where: {
                id: 2
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


        return queryInterface.bulkInsert('ContestsToPreferences', [
            {
                contestId: contest1.id,
                preferenceId: preference1.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contestId: contest2.id,
                preferenceId: preference1.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                contestId: contest1.id,
                preferenceId: preference2.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
