const path = require("path");
const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => {
  if (env('NODE_ENV') === "production") {
    return {
      connection: {
        client: "postgres",
        connection: {
          host: config.host,
          port: config.port,
          user: config.user,
          database: config.database,
          password: config.password,
        },
        ssl: {
          rejectUnauthorized: false,
        },
      },
      debug: false,
    };
  }
  return {
    connection: {
      client: "sqlite",
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };
};
