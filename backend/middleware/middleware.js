const ExpressError = require("../utils/expressError");

module.exports.isLoggedIn = (req, res, next) => {
  console.log(req.user);
  if (!req.isAuthenticated()) {
    return next(new ExpressError(500, "you must be logged in"));
  }
  next();
};
