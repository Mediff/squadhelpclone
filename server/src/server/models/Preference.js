'use strict';

module.exports = (sequelize, DataTypes) => {
    const Preferences = sequelize.define('Preferences', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        type:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        name:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    Preferences.associate = (models) => {
        Preferences.belongsTo(models.ContestTypes, { foreignKey: 'contestTypeId' });
        Preferences.belongsToMany(models.Contests, { through: models.ContestsToPreferences, foreignKey: 'preferenceId'});
    };

    return Preferences;
};