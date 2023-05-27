const assert = require("assert");
const Postgres = require("../db/strategies/postgress");
const Context = require("../db/strategies/base/constextStrategy");

const context = new Context(new Postgres());

const HEROIS_DEFAULT = {
  nome: "Gavião",
  poder: "mira boa",
};

const DATA_HEROIS_FOR_ACTULIZATION = {
  nome: "Maravilha",
  poder: "Grana",
};

describe("Postgres Strategy", function () {
  this.timeout(Infinity);
  this.beforeAll(async function () {
    await context.connect();
    await context.delete();
    await context.create(DATA_HEROIS_FOR_ACTULIZATION);
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
  it("Buscar dados de um heroi", async function () {
    const [result] = await context.read({ nome: HEROIS_DEFAULT.nome });
    delete result.id;
    assert.deepStrictEqual(result, HEROIS_DEFAULT);
  });
  it("Atualizar dados", async function () {
    const [itemAtual] = await context.read({
      nome: DATA_HEROIS_FOR_ACTULIZATION.nome,
    });
    const novoItem = {
      ...itemAtual,
      nome: "Mulher Maravilha",
    };
    await context.update(itemAtual.id, novoItem);
    const [result] = await context.read({ id: itemAtual.id });
    assert.deepStrictEqual(result.nome, novoItem.nome);
  });
  it("Deletar dados", async function () {
    const [itemAtual] = await context.read({});
    const result = await context.delete(itemAtual.id);
    assert.deepStrictEqual(result, 1);
  });
});
