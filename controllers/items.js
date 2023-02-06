"use strict";
const itemService = require("../services/items");

// Ambil seluruh data Item
exports.GetAllItem = async function (req, res) {
  try {
    const itemBody = req.body;
    const items = await itemService.GetAllItem(itemBody);
    return res.status(200).json({
      status: 200,
      message: "Berhasil mendapatkan data-data item",
      data: items,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Daftar/Signup Item Baru
exports.InsertItem = async function (req, res) {
  try {
    const itemBody = req.body;
    const item = await itemService.InsertItem(itemBody);
    return res.status(200).json({
      status: 200,
      message: "Berhasil daftar item!",
      data: item,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Ambil data item berdasarkan ID
exports.GetItemByID = async function (req, res) {
  try {
    const itemID = req.params.id;
    const items = await itemService.GetItemByID(itemID);
    return res.status(200).json({
      status: 200,
      message: "Berhasil mendapatkan data dari id item " + itemID,
      data: items,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Update data item berdasarkan ID
exports.UpdateItem = async function (req, res) {
  try {
    const itemID = req.params.id;
    const itemBody = req.body;
    const item = await itemService.UpdateItem(itemID, itemBody);
    return res.status(200).json({
      status: 200,
      message: "Berhasil ubah data item id " + itemID,
      data: "Item yang diubah " + item,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

exports.DeleteItem = async function (req, res) {
  try {
    const itemID = req.params.id;
    const item = await itemService.DeleteItem(itemID);
    return res.status(200).json({
      status: 200,
      message: "Berhasil menghapus data dari id item " + itemID,
      data: item,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};
