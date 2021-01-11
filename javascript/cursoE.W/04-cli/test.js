const { deepStrictEqual } = require("assert");
const database = require("./database");

const DEFAULT_ITEM_CADASTRAR = {
  nome: "Flash",
  poder: "Speed",
  id: 1,
};

const DEFAULT_ITEM_ATUALIZAR = {
  nome: "Lanterna Verde",
  poder: "Energia de uma luz",
  id: 2,
};

describe("Suite de manipulação de herois", () => {
  before(async () => {
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
    await database.cadastrar(DEFAULT_ITEM_ATUALIZAR);
  });
  it("Pesquisar um herois usando arquivoDEFAULT_ITEM_CADASTRARs", async () => {
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

  it("Deve remover um heroi", async () => {
    const expect = true;
    const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id);
    deepStrictEqual(resultado, expect);
  });
  it("deve atualizar um heroi por id ", async () => {
    const expect = {
      ...DEFAULT_ITEM_ATUALIZAR,
      nome: "Batman",
      poder: "Dinheiro",
    };
    const novo_dado = {
      nome: "Batman",
      poder: "Dinheiro",
    };
    await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novo_dado);
    const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id);
    deepStrictEqual(resultado, expect);
  });
});
