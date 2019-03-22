'use strict';

module.exports = (sequelize, DataTypes) => {
    const Contests = sequelize.define('Contests', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        ventureName: {
            type: DataTypes.TEXT
        },
        ventureDescribe: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        customerDescribe: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        file: {
            type: DataTypes.STRING
        },
        priority: {
            type: DataTypes.INTEGER
        }

    });

    Contests.associate = (models) => {
        Contests.balongsTo(models.CombinedContests, { foreignKey: 'combinedContestId'});
    };

    Contests.associate = (models) => {
        Contests.belongsTo(models.ContestTypes, { foreignKey: 'contestTypeId'});
    };

    Contests.associate = (models) => {
        Contests.belongsTo(models.Accounts, { foreignKey: 'contestCreatorId' });
    };

    Contests.associate = (models) => {
        Contests.hasMany(models.Entries, { foreignKey: 'contestId', sourceKey: 'id' });
    };

    Contests.associate = (models) => {
        Contests.belongsToMany(models.Preferences, { through: models.ContestsToPreferences, foreignKey: 'contestId'});
    };

    return Contests;
};