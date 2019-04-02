module.exports = (sequelize, DataTypes) => {
    const NameTypes = sequelize.define('NameTypes', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },

    });

    return NameTypes;
};