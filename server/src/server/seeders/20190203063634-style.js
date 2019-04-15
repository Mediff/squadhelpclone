const models = require('../models/index');
const ContestTypes = models.ContestTypes;

module.exports = {
    up: async (queryInterface, Sequelize) => {

        const logo = await ContestTypes.findOne({
            where: {
                name: 'Logo'
            }
        });
        const tagline = await ContestTypes.findOne({
            where: {
                name: 'Tagline'
            }
        });

        const name = await ContestTypes.findOne({
            where: {
                name: 'Name'
            }
        });

        return queryInterface.bulkInsert('Styles', [
            {
                name: 'Classic',
                contestTypeId: name.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Fun',
                contestTypeId: name.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Professional',
                contestTypeId: name.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Descriptive',
                contestTypeId: name.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Youthful',
                contestTypeId: name.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Any',
                contestTypeId: name.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Classic',
                contestTypeId: tagline.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Fun',
                contestTypeId: tagline.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Powerful',
                contestTypeId: tagline.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Descriptive',
                contestTypeId: tagline.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Modern',
                contestTypeId: tagline.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Any',
                contestTypeId: tagline.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Techy',
                contestTypeId: logo.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Fun',
                contestTypeId: logo.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Fancy',
                contestTypeId: logo.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Minimal',
                contestTypeId: logo.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Brick & Mortar',
                contestTypeId: logo.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Photo-based',
                contestTypeId: logo.id,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};