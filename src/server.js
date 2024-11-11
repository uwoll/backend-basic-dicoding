import Hapi from '@hapi/hapi';
import routerBooks from './books.js';
const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  });
  server.route(routerBooks);
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};
process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});
init();