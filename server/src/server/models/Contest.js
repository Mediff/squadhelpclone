'use strict';

const uuidV4 = require('uuid/v4');

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
        contestGroup: {
            type: DataTypes.UUID,
            defaultValue: uuidV4()
        },
        file: {
            type: DataTypes.STRING,
            allowNull: true
        },
        priority: {
            type: DataTypes.INTEGER
        },
        prize: {
          type: DataTypes.INTEGER
        },
        type: {
            type: DataTypes.ENUM('logo', 'tagline', 'name'),
            allowNull: false,
            validate: {
                isIn: [['logo', 'tagline', 'name']]
            }
        },
        styles: {
            type: DataTypes.ARRAY(DataTypes.TEXT)
        }

    });

    Contests.associate = (models) => {
        Contests.belongsTo(models.Accounts, { foreignKey: 'contestCreatorId', as: 'Creator' });
        Contests.belongsTo(models.Accounts, { foreignKey: 'winnerId', as: 'Winner' });
        Contests.hasMany(models.Entries, { foreignKey: 'contestId' });
        Contests.belongsTo(models.ContestTypes, {foreignKey: 'contestTypeId'});
    };


    return Contests;
};