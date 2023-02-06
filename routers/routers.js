const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World! Bershasil routing");
});

module.exports = router;
