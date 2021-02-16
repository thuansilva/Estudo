const Hapi = require("hapi");
const Context = require("./db/strategies/base/constextStrategy");
const MongoDB = require("./db/strategies/mongodb/mongoDB");
const HeroiSchema = require("./db/strategies/mongodb/schemas/heroiSchema");

const app = new Hapi.Server({
  port: 5000,
});

async function main() {
  const connection = MongoDB.connect();
  const context = new Context(new MongoDB(connection, HeroiSchema));
  app.route([
    {
      path: "/herois",
      method: "GET",
      handler: (request, head) => {
        return context.read();
      },
    },
  ]);
  await app.start();
  console.log("Servidor rodando", app.info.port);
}
module.exports = main();
