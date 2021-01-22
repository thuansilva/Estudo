const Icrud = require("./interface/interfaceCrud");
class ImplemetedPostress extends Icrud {
  constructor() {
    super();
  }
  create(item) {
    console.log("O item foi criado no Postgress!");
  }
}

module.exports = ImplemetedPostress;
