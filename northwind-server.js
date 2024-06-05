const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("northwind-db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);

server.listen(port, () => console.log(`northwind api running on port ${port}`));
