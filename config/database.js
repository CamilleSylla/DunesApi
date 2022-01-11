// module.exports = () => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: process.env.DATABASE_HOST,
//         port: process.env.DATABASE_PORT,
//         database: process.env.DATABASE_NAME,
//         username: process.env.DATABASE_USERNAME,
//         password: process.env.DATABASE_PASSWORD,
//         ssl: {
//           rejectUnauthorized: false,
//         },
//       },
//       options: {},
//     },
//   },
// });
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
      }
    },
  },
});
