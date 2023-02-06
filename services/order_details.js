const { Order_Detail } = require("../models");

//Order_Detail
exports.GetAllOrderDetail = async function (query) {
  try {
    const order_details = await Order_Detail.findAll();

    return order_details;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.InsertOrderDetail = async function (query) {
  try {
    const order_details = await Order_Detail.create({
      order_id: query.order_id,
      item_id: query.item_id,
      qty_order: query.qty_order,
      item_price: query.item_price,
      total_price: query.total_price,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return order_details;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.GetOrderDetailByID = async function (idParam) {
  try {
    const order_details = await Order_Detail.findAll({
      where: {
        id: idParam,
      },
    });

    return order_details;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.UpdateOrderDetail = async function (idParam, query) {
  try {
    const order_details = await Order_Detail.update(
      {
        order_id: query.order_id,
        item_id: query.item_id,
        qty_order: query.qty_order,
        item_price: query.item_price,
        total_price: query.total_price,
        updatedAt: new Date(),
      },
      {
        where: {
          id: idParam,
        },
      }
    );

    return order_details;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.DeleteOrderDetail = async function (idParam) {
  try {
    const order_details = await Order_Detail.destroy({
      where: {
        id: idParam,
      },
    });

    return order_details;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};
