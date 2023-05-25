const jwt = require("jsonwebtoken");
const createError = require("./Error");
const User = require("../models/User");

const verifyToken = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.SK);

      req.user = await User.findOne({ _id: decoded.id }).select("-password");
      next();
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(401, "You aren't authorized"));
  }
};

const verifyAdmin = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.SK);

      if (!decoded.isAdmin) {
        return next(createError(403, "You are not admin"));
      }

      req.user = await User.findOne({ _id: decoded.id }).select("-password");

      next();
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(401, "You aren't authorized"));
  }
};

module.exports = {
  verifyToken,
  verifyAdmin,
};
