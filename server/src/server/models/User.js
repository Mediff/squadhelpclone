
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    age: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        isAdult(value) {
          let date = moment()
            .subtract(18, 'years')
            .unix();
          date = moment(date).diff(value);
          if (date <= 0) {
            throw  new Error('You must be older then 18 years');
          }
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        notEmpty: true,
      },
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 2,
      },
    },
    intention: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    children: {
      type: DataTypes.INTEGER,
    },
    height: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        notEmpty: true,
      },
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    isBanned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  User.associate = function (models) {
    User.hasMany(models.Photo, { foreignKey: 'userId', targetKey: 'id' });
  };
  User.associate = function (models) {
    User.hasMany(models.RefreshToken, { foreignKey: 'userId', targetKey: 'id' });
  };
  User.associate = function (models) {
    User.hasMany(models.Visitor, { foreignKey: 'visitorId', targetKey: 'id' });
  };

  return User;
};
