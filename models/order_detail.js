"use strict";
const { Model } = require("sequelize");
const items = require("./items");
const order = require("./order");
module.exports = (sequelize, DataTypes) => {
  class Order_Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Order_Detail.belongsTo(items);
      // Order_Detail.belongsTo(order);
    }
  }
  Order_Detail.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      qty_order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      item_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Order_Detail",
    }
  );
  return Order_Detail;
};
