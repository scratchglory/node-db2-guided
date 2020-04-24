// Update with your config settings.

// defining our database connection
module.exports = {
  client: "sqlite3", // specifying the DBMS
  useNullAsDefault: true, // a flag required for SQLite
  connection: {
    filename: "./data/produce.db3", // location of our database file
  },
};
