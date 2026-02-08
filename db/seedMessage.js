#! /usr/bin/env node
require("dotenv").config();
console.log("DB_URL:", process.env.DB_URL); // 🔥 sanity check
const { Client } = require("pg");
const dbURL = process.env.DB_URL;

const SQL = `
CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

 
);

INSERT INTO posts (username,content) 
VALUES
('Bryan', 'Hello world!'),
  ('Odin', 'PostgreSQL is awesome.'),
  ('Damon', 'This is a test post.');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: dbURL,
    ssl: dbURL.includes("render.com") ? { rejectUnauthorized: false } : false,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

// "postgresql://Cyber10:Cyber4143@localhost:5432/top_users";
main();
