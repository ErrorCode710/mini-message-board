const { Router } = require("express");

const readRouter = Router();

readRouter.get("/", (req, res) => {
  res.render("read");
});

module.exports = readRouter;
