const express = require("express");
const db = require("./db");
const app = express();
const cors = require("cors");
require("dotenv").config();
const router = require("./router");

const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["Get", "POST", "PUT", "Delete"],
  })
);

app.use("/", router);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
