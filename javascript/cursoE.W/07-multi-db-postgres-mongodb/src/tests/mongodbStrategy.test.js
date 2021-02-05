const assert = require("assert");
const Mongodb = require("../db/strategies/mongoDB");
const TypeDatabase = require("../db/strategies/base/constextStrategy");

const context = new TypeDatabase(new Mongodb());
const HEROIS_DEFAULT = {
  nome: "mulher maravilha",
  poder: "laço",
};
const HEROIS_TEST_READ = {
  nome: `Flash - ${Date.now()}`,
  poder: "Vai Teia",
};

const HEROIS_TEST_UPDATE = {
  nome: `pernalonga - ${Date.now()}`,
  poder: "fala",
};
let DEFUALT_ID_UPDATE = "";

describe("Mongo DB suite de testes", function () {
  this.beforeAll(async () => {
    await context.connect();
    await context.create(HEROIS_TEST_READ);
    const id_update = await context.create(HEROIS_TEST_UPDATE);
    DEFUALT_ID_UPDATE = id_update._id;
  });
  it("Testar conexão ao Mongodb", async () => {
    const statusConection = await context.isConnected();
    console.log("statusConection", statusConection);
    assert.deepStrictEqual(statusConection, "connected");
  });
  it("Cadastrar Herois", async () => {
    const { nome, poder } = await context.create(HEROIS_DEFAULT);
    assert.deepStrictEqual({ nome, poder }, HEROIS_DEFAULT);
  });

  it("Listar herois", async () => {
    const [{ nome, poder }] = await context.read({
      nome: HEROIS_TEST_READ.nome,
    });
    const result = { nome, poder };
    assert.deepStrictEqual(result, HEROIS_TEST_READ);
  });

  it("Atualizar Dados", async () => {
    const result = await context.update(DEFUALT_ID_UPDATE, {
      nome: "Patolino",
      poder: "Mago",
    });

    assert.deepStrictEqual(result.n, 1);
  });
  it("Deletar Dado", async () => {
    const result = await context.delete(DEFUALT_ID_UPDATE);
    assert.deepStrictEqual(result.n, 1);
  });
});
