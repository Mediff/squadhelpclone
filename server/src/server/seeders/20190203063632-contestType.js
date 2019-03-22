const bcrypt = require('bcrypt');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('ContestTypes', [
            {
                name: 'Logo Contest',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Tagline Contest',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Name Contest',
                createdAt: new Date(),
                updatedAt: new Date()
            }], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
