const { User } = require("../models");

exports.GetAllUser = async function (query) {
  try {
    const users = await User.findAll();

    return users;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.InsertUser = async function (query) {
  try {
    const user = await User.create({
      email: query.email,
      username: query.username,
      name: query.name,
      password: query.password,
      address: query.address,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};
