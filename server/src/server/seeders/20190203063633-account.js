const bcrypt = require('bcrypt');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Accounts', [
            {
                firstName: 'Justin',
                lastName: 'Bieber',
                email: 'justin@bieber.com',
                passwordHash: '111111',
                profilePicture: 'justinPicture',
                role: 'buyer',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Justin2',
                lastName: 'Bieber2',
                email: 'justin2@bieber.com',
                passwordHash: '111111',
                profilePicture: 'justinPicture',
                role: 'buyer',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Justin3',
                lastName: 'Bieber3',
                email: 'justin3@bieber.com',
                passwordHash: '111111',
                profilePicture: 'justinPicture',
                role: 'buyer',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Justin4',
                lastName: 'Bieber4',
                email: 'justin4@bieber.com',
                passwordHash: '111111',
                profilePicture: 'justinPicture',
                role: 'buyer',
                createdAt: new Date(),
                updatedAt: new Date()
            }], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
