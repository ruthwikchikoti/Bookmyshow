const jwt = require("jsonwebtoken");

module.exports = function(req , res , next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verifiedtoken = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = verifiedtoken.userId;
    next();
  } catch (error) {
    res.status(401).send({ success: false, message: "Token Invalid" });
  }
}