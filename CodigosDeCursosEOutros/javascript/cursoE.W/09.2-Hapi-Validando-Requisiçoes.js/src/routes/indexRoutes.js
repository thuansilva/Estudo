const Joi = require("joi");
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
      options: {
        validate: {
          // payload -> body
          // headers -> header
          // params -> na URL : id
          // query -> ? skip=10
          failAction: (request, headers, error) => {
            throw error;
          },
          query: {
            skip: Joi.number().integer().default(0),
            limit: Joi.number().integer().default(10),
            nome: Joi.string().min(3).max(100),
          },
        },
      },
      handler: (request, head) => {
        try {
          const { skip, limit, nome } = request.query;
          const queryName = {
            nome: { $regex: `.*${nome}.*` },
          };

          return this.db.read(nome ? queryName : {}, skip, limit);
        } catch (error) {
          console.log("Deu error!", error);
        }
      },
    };
  }
}

module.exports = HeroesRoute;
