const { Router } = require("express");
const db = require("../db/queries");
const postController = require("../controller/postController");
const indexRouter = Router();
// const messages = [
//   { text: "Hi there!", user: "Amando", added: new Date() },
//   { text: "Hello World!", user: "Charles", added: new Date() },
// ];

// indexRouter.get("/", (req, res) => {
//   const messages = await db.getAllMessage();
//   console.log(messages)
//   const messageCount = messages.length;
//   console.log(messageCount);
//   res.render("index1", { messages: messages, messageCount: messageCount });
// });

indexRouter.get("/", postController.getPosts);
indexRouter.get("/new", postController.createNewMessageGet);

indexRouter.get("/read", postController.getFirstMessageGet);

indexRouter.get("/read/:user", postController.viewPostGet);

indexRouter.post("/new", postController.createNewMessagePost);
module.exports = indexRouter;
