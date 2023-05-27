const Hapi = require("hapi");
const Context = require("./db/strategies/base/constextStrategy");
const MongoDB = require("./db/strategies/mongodb/mongoDB");
const HeroiSchema = require("./db/strategies/mongodb/schemas/heroiSchema");
const HeroRoute = require("./routes/indexRoutes");

const app = new Hapi.Server({
  port: 5000,
});

function mapRoutes(typeDB, methodsRoutes) {
  return methodsRoutes.map((methodsRoutes) => typeDB[methodsRoutes]());
}

async function main() {
  const connection = MongoDB.connect();
  const context = new Context(new MongoDB(connection, HeroiSchema));
  app.route([...mapRoutes(new HeroRoute(context), HeroRoute.methods())]); //pegar os dados do banco de dados
  await app.start();
  console.log("Servidor rodando na porta: ", app.info.port);
  return app;
}
module.exports = main();
