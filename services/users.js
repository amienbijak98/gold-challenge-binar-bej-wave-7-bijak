const { User } = require("../models");

exports.GetAllUser = async function (query) {
  try {
    const users = await User.findAll();

    return users;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    return error;
  }
};
