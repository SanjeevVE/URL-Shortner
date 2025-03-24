// this configuration is for migrations only
// and since jwt secret is not required, it's set to a placehodler string to bypass env validation
if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = "securekey";
}

const env = require("./server/env");

const isSQLite = env.DB_CLIENT === "sqlite3" || env.DB_CLIENT === "better-sqlite3";

module.exports = {
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false } // ✅ Required for Render DB
  },
  useNullAsDefault: true,
  migrations: {
    tableName: "knex_migrations",
    directory: "server/migrations",
    disableMigrationsListValidation: true,
  }
};
