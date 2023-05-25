const Product = require("../models/Product");
const createError = require("../utils/Error");

const fetchByType = async (req, res, next) => {
  try {
    const products = await Product.find(req.query);

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const fetchById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const { title, desc, price, img, review, category } = req.body;

    if (!title || !desc || !price || !img || !review || !category) {
      return next(createError(400, "please fill all the fields of the form."));
    }

    const newProduct = await Product.create({
      title,
      desc,
      price,
      img,
      review,
      category,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  fetchByType,
  fetchById,
  createProduct,
};
