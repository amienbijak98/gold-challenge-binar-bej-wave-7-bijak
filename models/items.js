"use strict";
const { Model } = require("sequelize");
const categories = require("./categories");
const order_detail = require("./order_detail");
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Items.hasMany(order_detail, {
        foreignKey: "item_id",
      });
      Items.belongsTo(categories);
    }
  }
  Items.init(
    {
      item_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descriptions: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      item_price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      qty_stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Items",
    }
  );
  return Items;
};
