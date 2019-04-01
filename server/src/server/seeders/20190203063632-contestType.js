
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('ContestTypes', [
            {
                name: 'Logo',
                image: 'logoContest.png',
                imageHover: 'logoContestHover.png',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Name',
                image: 'name.png',
                imageHover: 'nameHover.png',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Tagline',
                image: 'tagline.png',
                imageHover: 'taglineHover.png',
                createdAt: new Date(),
                updatedAt: new Date()
            }
         ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
