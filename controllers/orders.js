"use strict";
const orderService = require("../services/orders");

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
