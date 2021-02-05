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
    this._tableHeroes = null;
    this._driver = null;
  }
  async isConnected() {
    const stateConection = Status[this._driver.readyState];
    if (stateConection === "connected") return stateConection;
    if (stateConection !== "connecting") return stateConection;
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return Status[this._driver.readyState];
  }
  async connect() {
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
    await this.defineModel();
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

    this._tableHeroes = Mongoose.model("herois", modelEschemaHeroes);
  }
  async create(item) {
    return await this._tableHeroes.create(item);
  }
  async read(item, skip = 0, limit = 10) {
    return await this._tableHeroes.find(item).skip(skip).limit(limit);
  }
  async update(id, item) {
    return await this._tableHeroes.updateOne({ _id: id }, item);
  }
}

module.exports = ImplemetedMongoDb;
