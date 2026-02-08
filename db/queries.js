const pool = require("./pool");

async function getAllPosts() {
  const { rows } = await pool.query("SELECT * FROM posts");
  console.log(rows);
  return rows;
}
async function insertPosts(username, content) {
  await pool.query("INSERT INTO posts (username, content) VALUES ($1, $2)", [username, content]);
}

module.exports = {
  getAllPosts,
  insertPosts,
};
