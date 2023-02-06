"use strict";
const { Model } = require("sequelize");
const order_detail = require("./order_detail");
const user = require("./user");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(user);
      Order.hasMany(order_detail, {
        foreignKey: "order_id",
      });
    }
  }
  Order.init(
    {
      total_price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      payment_method: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
