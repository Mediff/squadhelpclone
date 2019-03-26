module.exports = (sequelize, DataTypes) => {
    const CombinedContests = sequelize.define('CombinedContests', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        prize:{
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });

    CombinedContests.associate = (models) => {
        CombinedContests.hasMany(models.Contests, { foreignKey: 'combinedContestId'});
    };

    return CombinedContests;
};