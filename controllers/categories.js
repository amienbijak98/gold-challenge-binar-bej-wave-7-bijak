"use strict";
const categoryService = require("../services/categories");

// Ambil seluruh data Category
exports.GetAllCategory = async function (req, res) {
  try {
    const categoryBody = req.body;
    const categories = await categoryService.GetAllCategories(categoryBody);
    return res.status(200).json({
      status: 200,
      message: "Berhasil mendapatkan data-data category",
      data: categories,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Daftar/Signup Category Baru
exports.InsertCategory = async function (req, res) {
  try {
    const categoryBody = req.body;
    const category = await categoryService.InsertCategory(categoryBody);
    return res.status(200).json({
      status: 200,
      message: "Berhasil daftar category!",
      data: category,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Ambil data category berdasarkan ID
exports.GetCategoryByID = async function (req, res) {
  try {
    const categoryID = req.params.id;
    const categories = await categoryService.GetCategoryByID(categoryID);
    return res.status(200).json({
      status: 200,
      message: "Berhasil mendapatkan data dari id category " + categoryID,
      data: categories,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

// Update data category berdasarkan ID
exports.UpdateCategory = async function (req, res) {
  try {
    const categoryID = req.params.id;
    const categoryBody = req.body;
    const category = await categoryService.UpdateCategory(
      categoryID,
      categoryBody
    );
    return res.status(200).json({
      status: 200,
      message: "Berhasil ubah data category id " + categoryID,
      data: "Category yang diubah " + category,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

exports.DeleteCategory = async function (req, res) {
  try {
    const categoryID = req.params.id;
    const category = await categoryService.DeleteCategory(categoryID);
    return res.status(200).json({
      status: 200,
      message: "Berhasil menghapus data dari id category " + categoryID,
      data: category,
    });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};
