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
        return this.db.read();
      },
    };
  }
}

module.exports = HeroesRoute;
