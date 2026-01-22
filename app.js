const express = require("express");
const app = express();
const path = require("node:path");

const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");
const readRouter = require("./routes/readRouter");
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
// app.use("/new", newMessageRouter);
// app.use("/read", readRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
