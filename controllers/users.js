const user = require("../models/user");
const userService = require("../services/users");

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

exports.InsertUser = async function (req, res) {
  try {
    const userBody = req.body;
    const user = await userService.InsertUser(userBody);
    return res.status(200).json({
      status: 200,
      data: user,
      message: "Berhasil daftar user!",
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};
