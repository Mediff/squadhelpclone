'use strict';

module.exports = (sequelize, DataTypes) => {
    const Entries = sequelize.define('Entries', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        isWinner: {
            type: DataTypes.BOOLEAN,
            default: null
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    Entries.associate = (models) => {
        Entries.belongsTo(models.Accounts, { foreignKey: 'creatorId', as: 'Creator'});
        Entries.belongsTo(models.Contests, { foreignKey: 'contestId'});
    };

    return Entries;
};