module.exports = {
  test,
}


let test = (req, res, next) => {
  res.send("Hey, User");
  next();
}
