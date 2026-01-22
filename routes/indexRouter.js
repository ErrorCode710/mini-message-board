const { Router } = require("express");
const indexRouter = Router();
const messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() },
];

indexRouter.get("/", (req, res) => {
  const messageCount = messages.length;
  console.log(messageCount);
  res.render("index1", { messages: messages, messageCount: messageCount });
});
indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.get("/read", (req, res) => {
  const firstMessage = [...messages].reverse();

  res.render("read", { messages: firstMessage });
});

indexRouter.get("/read/:user", (req, res) => {
  const user = req.params.user;
  console.log(user);
  const userMessage = messages.filter((m) => m.user.toLowerCase() === user.toLowerCase());

  res.render("viewMessage", { messages: userMessage });
});

indexRouter.post("/new", (req, res) => {
  const { messageUser, messageText } = req.body;
  console.log(req.body);
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});
module.exports = indexRouter;
