

module.exports = (sequelize, DataTypes) => {
    const Styles = sequelize.define('Styles', {
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

    Styles.associate = (models) => {
        Styles.belongsTo(models.ContestTypes, {foreignKey: 'contestTypeId'});
    };


    return Styles;
};