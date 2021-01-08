const { deepStrictEqual, ok } = require("assert");
const database = require("./database");

const DEFAULT_ITEM_CADASTRAR = {
  nome: "Flash",
  poder: "Speed",
  id: 1,
};

describe("Suite de manipulação de herois", () => {
  it("Pesquisar um herois usando arquivos", async () => {
    const expect = DEFAULT_ITEM_CADASTRAR;
    const [resultado] = await database.listar(expect.id);
    deepStrictEqual(resultado, expect);
  });

  it("Deve cadastrar um heroi, usando arquivos", async () => {
    const expect = DEFAULT_ITEM_CADASTRAR;
    const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
    const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id);
    deepStrictEqual(actual, expect);
  });
});
