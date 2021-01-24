const Icrud = require("./interface/interfaceCrud");
class ImplemetedMongoDb extends Icrud {
  constructor() {
    super();
  }
  create(item) {
    console.log("O item foi criado no MongoDB!");
  }
}

module.exports = ImplemetedMongoDb;
