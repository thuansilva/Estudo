const Icrud = require("../interface/interfaceCrud");
const Mongoose = require("mongoose");
const Status = {
  0: "disconnected",
  1: "connected",
  2: "connecting",
  3: "disconnecting",
};

class ImplemetedMongoDb extends Icrud {
  constructor(connection, schemaDatabase) {
    super();
    this._tableHeroes = schemaDatabase;
    this._connection = connection;
  }
  async isConnected() {
    const stateConection = Status[this._connection.readyState];
    if (stateConection === "connected") return stateConection;
    if (stateConection !== "connecting") return stateConection;
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return Status[this._connection.readyState];
  }
  static connect() {
    Mongoose.connect(
      "mongodb://thuan:senhasecreta@localhost:27017/herois",
      { useNewUrlParser: true, useUnifiedTopology: true },
      function (error) {
        if (!error) return;
        console.log("Falha na conexão", error);
      }
    );

    const connection = Mongoose.connection;
    // connection.once("open", () => console.log("Database rodando!!"));
    return connection;
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
  async delete(id) {
    return await this._tableHeroes.deleteOne({ _id: id });
  }
}

module.exports = ImplemetedMongoDb;
