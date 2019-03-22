'use strict';

module.exports = (sequelize, DataTypes) => {
    const Balances = sequelize.define('Balances', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        balance: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0
        }
    });

    Balances.associate = (models) => {
        Balances.belongsTo(models.Accounts, {foreignKey: 'userId'});
    };

    return Balances;
};
