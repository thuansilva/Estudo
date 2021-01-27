const assert = require("assert");
const Postgres = require("../db/strategies/postgress");
const Context = require("../db/strategies/base/constextStrategy");

const context = new Context(new Postgres());

const HEROIS_DEFAULT = {
  nome: "Gavião",
  poder: "mira boa",
};

describe("Postgres Strategy", function () {
  this.timeout(Infinity);
  this.beforeAll(async function () {
    await context.connect();
  });
  it("Postgres Sql Connection", async function () {
    const result = await context.isConnected();
    assert.deepStrictEqual(result, true);
  });
  it("Cadastrar um heroi", async function () {
    const result = await context.create(HEROIS_DEFAULT);
    delete result.id;
    assert.deepStrictEqual(result, HEROIS_DEFAULT);
  });
  it.only("Buscar dados de um heroi", async function () {
    const [result] = await context.read({ nome: HEROIS_DEFAULT.nome });
    delete result.id;
    assert.deepStrictEqual(result, HEROIS_DEFAULT);
  });
});
