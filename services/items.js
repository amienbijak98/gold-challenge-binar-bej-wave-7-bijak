const { Items } = require("../models");

exports.GetAllItem = async function (query) {
  try {
    const items = await Items.findAll();

    return items;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.InsertItem = async function (query) {
  try {
    const item = await Items.create({
      item_name: query.item_name,
      descriptions: query.descriptions,
      item_price: query.item_price,
      qty_stock: query.qty_stock,
      category_id: query.category_id,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return item;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.GetItemByID = async function (idParam) {
  try {
    const item = await Items.findAll({
      where: {
        id: idParam,
      },
    });

    return item;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.UpdateItem = async function (idParam, query) {
  try {
    const item = await Items.update(
      {
        item_name: query.item_name,
        descriptions: query.descriptions,
        item_price: query.item_price,
        qty_stock: query.qty_stock,
        category_id: query.category_id,
        updatedAt: new Date(),
      },
      {
        where: {
          id: idParam,
        },
      }
    );

    return item;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.DeleteItem = async function (idParam) {
  try {
    const item = await Items.destroy({
      where: {
        id: idParam,
      },
    });

    return item;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};
