let admin = (req, res, next) => {
  if (req.user.role === 0) return res.send("Your are not allowed, Not admin");
  //   if you want multiple admin user role
  //   if (req.user.role === 1 && ---) return res.send("Your are not allowed, Not admin");
  next();
};

module.exports = {
  admin,
};
