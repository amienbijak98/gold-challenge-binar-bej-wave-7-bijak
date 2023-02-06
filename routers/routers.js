const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

router.get("/", (req, res) => {
  res.send("Hello World! Bershasil routing");
});

//API USERS
router.get("/users", userController.GetAllUser);
router.post("/signup", userController.InsertUser);

module.exports = router;
