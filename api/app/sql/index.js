const { Pool } = require("pg");

const pool = new Pool({
  user: "db_interview_user",
  database: "db_interview",
  password: "vcCgNk9jdjcglWrjsVOHQKy41nefxNhE",
  port: 5432,
  host: "dpg-cl65kdiuuipc73c8d00g-a.oregon-postgres.render.com",
  ssl: true
});

module.exports = { pool };