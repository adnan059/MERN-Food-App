const express = require("express");
const { verifyToken, verifyAdmin } = require("../utils/VerifyUser");
const {
  fetchByType,
  fetchById,
  createProduct,
} = require("../controllers/productControllers");
const router = express.Router();

// get products by type
router.get("/", fetchByType);

// get products by id
router.get("/find/:id", verifyToken, fetchById);

// create a product
router.post("/create", verifyAdmin, createProduct);

module.exports = router;
