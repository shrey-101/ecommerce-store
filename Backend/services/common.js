const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //TODO : this is temporary token for testing without cookie
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWVjYTFiMzUwMThkNGZjOTI1M2I2NyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg5MTc3MDQzfQ.LSGXMw2JlL0zL_kMGqYsuuB5ZNVQPBvSppVmFn5HYOQ";
  return token;
};
