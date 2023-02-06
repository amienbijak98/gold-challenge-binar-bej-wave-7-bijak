"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const order = require("./order");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasMany(order.Order, {
      //   foreignKey: "user_id",
      // });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
        unique: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      instanceMethods: {
        generateHash(password) {
          return bcrypt.hash(password, bcrypt.genSaltSync(8));
        },
        validPassword(password) {
          return bcrypt.compare(password, this.password);
        },
      },
    }
  );
  return User;
};
