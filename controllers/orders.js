"use strict";
const orderService = require("../services/orders");
const orderDetailService = require("../services/order_details");

// Ambil seluruh data Order
exports.GetAllOrder = async function (req, res) {
  try {
    const orderBody = req.body;
    const orders = await orderService.GetAllOrder(orderBody);
    return res.status(200).json({
      status: 200,
      message: "Berhasil mendapatkan data-data order",
      data: orders,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Daftar/Signup Order Baru
exports.InsertOrder = async function (req, res) {
  try {
    const orderBody = req.body;
    const order = await orderService.InsertOrder(orderBody);
    return res.status(200).json({
      status: 200,
      message: "Berhasil daftar order!",
      data: order,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Ambil data order berdasarkan ID
exports.GetOrderByID = async function (req, res) {
  try {
    const orderID = req.params.id;
    const orders = await orderService.GetOrderByID(orderID);
    return res.status(200).json({
      status: 200,
      message: "Berhasil mendapatkan data dari id order " + orderID,
      data: orders,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Update data order berdasarkan ID
exports.UpdateOrder = async function (req, res) {
  try {
    const orderID = req.params.id;
    const orderBody = req.body;
    const order = await orderService.UpdateOrder(orderID, orderBody);
    return res.status(200).json({
      status: 200,
      message: "Berhasil ubah data order id " + orderID,
      data: "Order yang diubah " + order,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

exports.DeleteOrder = async function (req, res) {
  try {
    const orderID = req.params.id;
    const order = await orderService.DeleteOrder(orderID);
    return res.status(200).json({
      status: 200,
      message: "Berhasil menghapus data dari id order " + orderID,
      data: order,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// === ORDER DETAILS ===
// Ambil seluruh data Order Detail
exports.GetAllOrderDetail = async function (req, res) {
  try {
    const order_DetailBody = req.body;
    const order_details = await orderDetailService.GetAllOrderDetail(
      order_DetailBody
    );
    return res.status(200).json({
      status: 200,
      message: "Berhasil mendapatkan data-data order details",
      data: order_details,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Insert Order Detail Baru
exports.InsertOrderDetail = async function (req, res) {
  try {
    const order_DetailBody = req.body;
    const order_detail = await orderDetailService.InsertOrderDetail(
      order_DetailBody
    );
    return res.status(200).json({
      status: 200,
      message: "Berhasil daftar order!",
      data: order_detail,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Ambil data order berdasarkan ID
exports.GetOrderDetailByID = async function (req, res) {
  try {
    const orderDetailID = req.params.id;
    const orders = await orderDetailService.GetOrderDetailByID(orderDetailID);
    return res.status(200).json({
      status: 200,
      message: "Berhasil mendapatkan data dari id order " + orderDetailID,
      data: orders,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Update data order berdasarkan ID
exports.UpdateOrderDetail = async function (req, res) {
  try {
    const orderDetailID = req.params.id;
    const orderDetailBody = req.body;
    const orderDetail = await orderDetailService.UpdateOrderDetail(
      orderDetailID,
      orderDetailBody
    );
    return res.status(200).json({
      status: 200,
      message: "Berhasil ubah data order id " + orderDetailID,
      data: "Order yang diubah " + orderDetail,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

exports.DeleteOrderDetail = async function (req, res) {
  try {
    const orderDetailID = req.params.id;
    const orderDetail = await orderDetailService.DeleteOrderDetail(
      orderDetailID
    );
    return res.status(200).json({
      status: 200,
      message: "Berhasil menghapus data dari id order " + orderDetailID,
      data: orderDetail,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};
