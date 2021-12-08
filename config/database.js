module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "dunes"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "laGalere72"),
        schema: env("DATABASE_SCHEMA", "public"),
      },
      options: {},
    },
  },
});

//local db infos
// path : C:\Program Files\PostgreSQL\14
// path : for data C:\Program Files\PostgreSQL\14\data
// mdp : laGalere72
// port : 5432
