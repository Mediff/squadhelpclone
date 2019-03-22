
const models = require('../models/index');
const ContestTypes = models.ContestTypes;

module.exports = {
    up: async (queryInterface, Sequelize) => {

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



        return queryInterface.bulkInsert('Preferences', [
            {
                type: 'name',
                name: 'Company',
                contestTypeId:  name.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'name',
                name: 'Product',
                contestTypeId:  name.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'name',
                name: 'Project',
                contestTypeId:  name.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'preferences',
                name: 'Classic',
                contestTypeId:  name.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'preferences',
                name: 'Fun',
                contestTypeId:  name.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'preferences',
                name: 'Professional',
                contestTypeId:  name.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'preferences',
                name: 'Descriptive',
                contestTypeId:  name.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'preferences',
                name: 'Youthful',
                contestTypeId:  name.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'preferences',
                name: 'Any',
                contestTypeId:  name.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'preferences',
                name: 'Classic',
                contestTypeId:  tagline.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'preferences',
                name: 'Fun',
                contestTypeId:  tagline.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'preferences',
                name: 'Powerful',
                contestTypeId:  tagline.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'preferences',
                name: 'Descriptive',
                contestTypeId:  tagline.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'preferences',
                name: 'Powerful',
                contestTypeId:  tagline.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'preferences',
                name: 'Any',
                contestTypeId:  tagline.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'preferences',
                name: 'Techy',
                contestTypeId:  logo.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'preferences',
                name: 'Fun',
                contestTypeId:  logo.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'preferences',
                name: 'Fancy',
                contestTypeId:  logo.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'preferences',
                name: 'Minimal',
                contestTypeId:  logo.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'preferences',
                name: 'Brick & Mortar',
                contestTypeId:  logo.id,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type: 'preferences',
                name: 'Photo-based',
                contestTypeId:  logo.id,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
