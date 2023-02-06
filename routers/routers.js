const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

router.get("/", (req, res) => {
  res.send("Hello World! Bershasil routing");
});
router.get("/users", userController.GetAllUser);

module.exports = router;
