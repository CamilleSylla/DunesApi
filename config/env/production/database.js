// const parse = require('pg-connection-string').parse;
// const config = parse(process.env.DATABASE_URL);

// module.exports = () => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: config.host,
//         port: config.port,
//         database: config.database,
//         username: config.user,
//         password: config.password,
//         ssl: {
//           rejectUnauthorized: false,
//         },
//       },
//       options: {},
//     },
//   },
// });



// const parse = require('pg-connection-string').parse;
// const config = parse(process.env.DATABASE_URL);
// const pg = require('pg')
// pg.defaults.ssl = true
module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host: env('DATABASE_HOST', '127.0.0.1'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'strapi'),
          username: env('DATABASE_USERNAME', 'strapi'),
          password: env('DATABASE_PASSWORD', 'strapi'),
        },
        options: {},
      },
    },
  });

// const parse = require('pg-connection-string').parse;
// const config = parse(process.env.DATABASE_URL);

// module.exports = () => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: config.host,
//         port: config.port,
//         database: config.database,
//         username: config.user,
//         password: config.password,
//         ssl: {
//           rejectUnauthorized: false,
//         },
//       },
//       options: {},
//     },
//   },
// });