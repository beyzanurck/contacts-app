import pg from 'pg'

const db = new pg.Pool({
  connectionString: process.env.DB_URL,
});

// console.log(db)
// console.log("1", process.env.DB_URL)
// console.log("2", db.options.connectionString)
export default db;