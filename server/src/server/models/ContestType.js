'use strict';

module.exports = (sequelize, DataTypes) => {
    const ContestTypes = sequelize.define('ContestTypes', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    ContestTypes.associate = (models) => {
        ContestTypes.hasMany(models.Contests, { foreignKey: 'contestTypeId'});
    };

    ContestTypes.associate = (models) => {
        ContestTypes.hasOne(models.Preferences, { foreignKey: 'contestTypeId' });
    };


    return ContestTypes;
};