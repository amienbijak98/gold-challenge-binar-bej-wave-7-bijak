const express = require("express");
const app = express();
const port = 3000;
const routers = require("./routers/routers");

app.use(express.json());
app.use("/api/v1", routers);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
