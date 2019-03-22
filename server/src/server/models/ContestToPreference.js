'use strict';

module.exports = (sequelize, DataTypes) => {
    const ContestsToPreferences = sequelize.define('ContestsToPreferences', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        }
    });


    return ContestsToPreferences;
};
