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
        displayName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        balance: {
            type: DataTypes.INTEGER,
            allowNull: true
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
        }
    });

    Accounts.associate = (models) => {
        Accounts.hasMany(models.Contests, {foreignKey: 'contestCreatorId', as: 'Creator'});
        Accounts.hasMany(models.Contests, {foreignKey: 'winnerId', as: 'Winner'});
        Accounts.hasMany(models.Entries, {foreignKey: 'creatorId'});
    };

    return Accounts;
};