const Icrud = require("./interface/interfaceCrud");
const Mongoose = require("mongoose");
const Status = {
  0: "disconnected",
  1: "connected",
  2: "connecting",
  3: "disconnecting",
};

class ImplemetedMongoDb extends Icrud {
  constructor() {
    super();
    this._TableHeroes = null;
    this._driver = null;
  }
  async isConnected() {
    const stateConection = Status[this._driver.readyState];
    if (stateConection === "connected") return true;
    if (stateConection !== "connecting") return stateConection;
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return Status[this._driver.readyState];
  }
  connect() {
    Mongoose.connect(
      "mongodb://thuan:senhasecreta@localhost:27017/herois",
      { useNewUrlParser: true, useUnifiedTopology: true },
      function (error) {
        if (!error) return;
        console.log("Falha na conexão", error);
      }
    );

    const connection = Mongoose.connection;
    connection.once("open", () => console.log("Database rodando!!"));
    this._driver = connection;
  }

  async defineModel() {
    const modelEschemaHeroes = new Mongoose.Schema({
      nome: {
        type: String,
        required: true,
      },
      poder: {
        type: String,
        required: true,
      },
      insertedAt: {
        type: Date,
        default: new Date(),
      },
    });

    this._TableHeroes = Mongoose.model("herois", modelEschemaHeroes);
  }
  async create(item) {
    const resultDataCadastrar = await tableHeroes.create({
      nome: "batman",
      poder: "dinheiro",
    });
    console.log("result cadastrar", resultDataCadastrar);
  }
}

module.exports = ImplemetedMongoDb;
