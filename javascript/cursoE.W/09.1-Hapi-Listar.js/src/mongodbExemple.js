const Mongoose = require("mongoose");
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

const tableHeroes = Mongoose.model("herois", modelEschemaHeroes);

async function main() {
  const resultDataCadastrar = await tableHeroes.create({
    nome: "batman",
    poder: "dinheiro",
  });
  console.log("result cadastrar", resultDataCadastrar);
}

main();
