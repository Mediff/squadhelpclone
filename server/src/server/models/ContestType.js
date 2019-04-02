
module.exports = (sequelize, DataTypes) => {
    const ContestTypes = sequelize.define('ContestTypes', {
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
        image: {
            type: DataTypes.TEXT
        },
        imageHover: {
            type: DataTypes.TEXT
        }

    });

    ContestTypes.associate = (models) => {
        ContestTypes.hasOne(models.Contests, {foreignKey: 'contestTypeId'});
        ContestTypes.hasMany(models.Styles, {foreignKey: 'contestTypeId'});
    };


    return ContestTypes;
};