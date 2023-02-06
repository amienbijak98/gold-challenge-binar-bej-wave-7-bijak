const user = require("../models/user");
const userService = require("../services/users");

exports.GetAllUser = async function (req, res, next) {
  try {
    const userBody = req.body;
    const users = await userService.GetAllUser(userBody);
    return res.status(200).json({
      status: 200,
      message: "Berhasil mendapatkan data Users",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};
