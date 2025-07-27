const port = 4002;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const Product = require("./Models/Product.js");
const Users = require("./Models/Users.js");

const productsRoutes = require("./Routes/productsRoutes");
const userRoutes = require("./Routes/userRoutes");
const cartRoutes = require("./Routes/cartRoutes");
const paymentRoutes = require("./Routes/paymentRoutes");
const fetchUser = require("./middleWare/fetchUser");

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use("/images", express.static("upload/images"));
app.use("/product", productsRoutes);
app.use("/user", userRoutes);
app.use("/cart", cartRoutes);
app.use("/payment", paymentRoutes);

//api creation
app.get("/", (req, res) => {
  res.send("express dsddd app is running");
});

//port listen
const server = app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on port " + port);
  } else {
    console.log("Error: " + error);
  }
});

server.on("error", (err) => {
  console.error("Server error:", err);
});
