const { Categories } = require("../models");

exports.GetAllCategories = async function (query) {
  try {
    const categories = await Categories.findAll();

    return categories;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.InsertCategory = async function (query) {
  try {
    const category = await Categories.create({
      category_name: query.category_name,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return category;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.GetCategoryByID = async function (idParam) {
  try {
    const category = await Categories.findAll({
      where: {
        id: idParam,
      },
    });

    return category;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.UpdateCategory = async function (idParam, query) {
  try {
    const category = await Categories.update(
      {
        category_name: query.category_name,
        updatedAt: new Date(),
      },
      {
        where: {
          id: idParam,
        },
      }
    );

    return category;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};

exports.DeleteCategory = async function (idParam) {
  try {
    const category = await Categories.destroy({
      where: {
        id: idParam,
      },
    });

    return category;
  } catch (error) {
    console.log("Terjadi error di repository: " + error);
    throw error;
  }
};
