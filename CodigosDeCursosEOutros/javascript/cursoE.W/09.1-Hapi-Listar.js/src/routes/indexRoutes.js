const BaseRoute = require("./base/baseRoutes");
class HeroesRoute extends BaseRoute {
  constructor(db) {
    super();
    this.db = db;
  }
  read() {
    return {
      path: "/herois",
      method: "GET",
      handler: (request, head) => {
        try {
          const { skip, limit, nome } = request.query;
          let dado = {};
          if (nome) {
            dado.nome = nome;
          }
          if (isNaN(skip)) {
            throw Error("Parametro inválido!");
          }
          if (isNaN(limit)) {
            throw Error("Parametro inválido!");
          }
          return this.db.read(dado, parseInt(skip), parseInt(limit));
        } catch (error) {
          console.log("Deu error!", error);
        }
      },
    };
  }
}

module.exports = HeroesRoute;
