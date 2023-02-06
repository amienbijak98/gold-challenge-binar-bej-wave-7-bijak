"use strict";
const userService = require("../services/users");

// Ambil seluruh data User
exports.GetAllUser = async function (req, res) {
  try {
    const userBody = req.body;
    const users = await userService.GetAllUser(userBody);
    return res.status(200).json({
      status: 200,
      message: "Berhasil mendapatkan data-data user",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Daftar/Signup User Baru
exports.InsertUser = async function (req, res) {
  try {
    const userBody = req.body;
    const user = await userService.InsertUser(userBody);
    return res.status(200).json({
      status: 200,
      message: "Berhasil daftar user!",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Ambil data user berdasarkan ID
exports.GetUserByID = async function (req, res) {
  try {
    const userID = req.params.id;
    const users = await userService.GetUserByID(userID);
    return res.status(200).json({
      status: 200,
      message: "Berhasil mendapatkan data dari id user " + userID,
      data: users,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Update data user berdasarkan ID
exports.UpdateUser = async function (req, res) {
  try {
    const userID = req.params.id;
    const userBody = req.body;
    const user = await userService.UpdateUser(userID, userBody);
    return res.status(200).json({
      status: 200,
      message: "Berhasil ubah data user id " + userID,
      data: "User yang diubah" + user,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

exports.DeleteUser = async function (req, res) {
  try {
    const userID = req.params.id;
    const user = await userService.DeleteUser(userID);
    return res.status(200).json({
      status: 200,
      message: "Berhasil menghapus data dari id user " + userID,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};
