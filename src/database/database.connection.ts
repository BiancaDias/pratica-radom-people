import pg from "pg";

const { Pool } = pg;

const db = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "124578",
    database: "randompeople"
  });
  
  export { db };