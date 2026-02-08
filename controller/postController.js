const db = require("../db/queries");

async function getPosts(req, res) {
  
  const posts = await db.getAllPosts();
  const messageCount = posts.length;
  res.render("index1", { messages: posts, messageCount: messageCount });
}

async function createNewMessageGet(req, res) {
  res.render("form");
}
async function getFirstMessageGet(req, res) {
  const posts = await db.getAllPosts();
  const firstMessage = [...posts].reverse();

  res.render("read", { messages: firstMessage });
}
async function viewPostGet(req, res) {
  const posts = await db.getAllPosts();
  const user = req.params.user;
 
  const userMessage = posts.filter((m) => m.username.toLowerCase() === user.toLowerCase());

  res.render("viewMessage", { messages: userMessage });
}

async function createNewMessagePost(req, res) {
  const { messageUser, messageText } = req.body;

  await db.insertPosts(messageUser, messageText);
  //   messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
}

module.exports = {
  getPosts,
  createNewMessageGet,
  getFirstMessageGet,
  viewPostGet,
  createNewMessagePost,
};
