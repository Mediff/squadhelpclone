'use strict';

module.exports = (sequelize, DataTypes) => {
    const Entries = sequelize.define('Entries', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        isRejected: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        isWinner: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    Entries.associate = (models) => {
        Entries.belongsTo(models.Accounts, { foreignKey: 'creatorId'});
        Entries.belongsTo(models.Contests, { foreignKey: 'contestId'});
    };

    return Entries;
};