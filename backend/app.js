const express = require("express");
const app = express();
require("./connection/conn");
const auth = require("./routs/auth");
const list = require("./routs/list");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is started");
});

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(1000, () => {
  console.log("Server is started");
});
