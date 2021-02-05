const assert = require("assert");
const Mongodb = require("../db/strategies/mongoDB");
const TypeDatabase = require("../db/strategies/base/constextStrategy");

const context = new TypeDatabase(new Mongodb());
const HEROIS_DEFAULT = {
  nome: "mulher maravilha",
  poder: "laço",
};

describe("Mongo DB suite de testes", function () {
  this.beforeAll(async () => {
    await context.connect();
  });
  it("Testar conexão ao Mongodb", async () => {
    const statusConection = await context.isConnected();
    assert.deepStrictEqual(statusConection, "connected");
  });
  it.only("Cadastrar Herois", async () => {
    const { nome, poder } = await context.create(HEROIS_DEFAULT);
    assert.deepStrictEqual({ nome, poder }, HEROIS_DEFAULT);
  });
});
