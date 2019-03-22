'use strict';

module.exports = (sequelize, DataTypes) => {
    const Accounts = sequelize.define('Accounts', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        profilePicture: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        role: {
            type: DataTypes.ENUM('buyer', 'creator'),
            allowNull: false,
            validate: {
                isIn: [['buyer', 'creator']]
            }
        },
        token: {
            type: DataTypes.TEXT
        },

    });

    Accounts.associate = (models) => {
        Accounts.hasOne(models.Balances, {foreignKey: 'userId'});
    };

    Accounts.associate = (models) => {
        Accounts.hasMany(models.Entries, {foreignKey: 'creatorId'});
    };

    Accounts.associate = (models) => {
        Accounts.hasMany(models.Contests, {foreignKey: 'contestCreatorId'});
    };

    return Accounts;
};