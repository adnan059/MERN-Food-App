require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const createError = require("./utils/Error");
const { verifyToken, verifyAdmin } = require("./utils/VerifyUser");

console.log(__dirname);

// **********************************

const PORT = process.env.PORT || 8000;
const DB_URL = process.env.DB_URL;
const UPLOAD_FOLDER = "./uploads/images";

// ************************************

const app = express();
app.use(cors());
app.use(express.json());
app.use("/images", express.static("uploads/images"));

// ***************************************

const connect = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Database Connected");
    app.listen(PORT, () => console.log("Server listening to port " + PORT));
  } catch (error) {
    console.log(error);
  }
};

connect();

// ************************************

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_FOLDER);
  },
  filename: (req, file, cb) => {
    cb(null, req.body.filename);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(createError(400, "Only jpeg, jpg and png format photos are allowed!"));
    }
  },
});

// *************************************************

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.post("/upload", verifyAdmin, upload.single("image"), (req, res) => {
  res.status(201).json({ message: "Picture has been uploaded successfully." });
});

// ****************************************************
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";

  return res.status(status).json({
    message,
    status,
    success: false,
    stack: err.stack,
  });
});
