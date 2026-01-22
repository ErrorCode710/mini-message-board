const { Router } = require("express");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("form");
});


// newMessageRouter.post("/", (req, res) => {
//   const { messageUser, messageText } = req.body;
//   console.log(req.body);
//   // TEMP: log to prove it works
//   console.log(messageUser, messageText);

//   res.redirect("/");
// });

module.exports = newMessageRouter;
