module.exports = (sequelize, DataTypes) => {
    const Industries = sequelize.define('Industries', {
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

    Industries.associate = (models) => {
        Industries.hasOne(models.Contests, {foreignKey: 'industryId'});
    };

    return Industries;
};