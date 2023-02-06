const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");
const categoryController = require("../controllers/categories");
const itemController = require("../controllers/items");
const orderController = require("../controllers/orders");

router.get("/", (req, res) => {
  res.send("Hello World! Bershasil routing");
});

//API USERS
router.get("/users", userController.GetAllUser);
router.get("/users/:id", userController.GetUserByID);
router.post("/signup", userController.InsertUser);
router.put("/users/:id", userController.UpdateUser);
router.delete("/users/:id", userController.DeleteUser);

//API CATEGORIES
router.get("/categories", categoryController.GetAllCategory);
router.get("/categories/:id", categoryController.GetCategoryByID);
router.post("/categories", categoryController.InsertCategory);
router.put("/categories/:id", categoryController.UpdateCategory);
router.delete("/categories/:id", categoryController.DeleteCategory);

//API ITEMS
router.get("/items", itemController.GetAllItem);
router.get("/items/:id", itemController.GetItemByID);
router.post("/items", itemController.InsertItem);
router.put("/items/:id", itemController.UpdateItem);
router.delete("/items/:id", itemController.DeleteItem);

//API ORDERS
router.get("/orders", orderController.GetAllOrder);
router.get("/orders/:id", orderController.GetOrderByID);
router.post("/orders", orderController.InsertOrder);
router.put("/orders/:id", orderController.UpdateOrder);
router.delete("/orders/:id", orderController.DeleteOrder);

module.exports = router;
