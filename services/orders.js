const { Order } = require("../models");

//Order
exports.GetAllOrder = async function (query) {
  try {
    const orders = await Order.findAll();

    return orders;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.InsertOrder = async function (query) {
  try {
    const order = await Order.create({
      total_price: query.total_price,
      payment_method: query.payment_method,
      user_id: query.user_id,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return order;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.GetOrderByID = async function (idParam) {
  try {
    const order = await Order.findAll({
      where: {
        id: idParam,
      },
    });

    return order;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.UpdateOrder = async function (idParam, query) {
  try {
    const order = await Order.update(
      {
        total_price: query.total_price,
        payment_method: query.payment_method,
        user_id: query.user_id,
        updatedAt: new Date(),
      },
      {
        where: {
          id: idParam,
        },
      }
    );

    return order;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.DeleteOrder = async function (idParam) {
  try {
    const order = await Order.destroy({
      where: {
        id: idParam,
      },
    });

    return order;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

// Order Detail
