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

  /*   it("Pesquisar um herois usando arquivos", async () => {
    const Fexpect = DEFAULT_ITEM_CADASTRAR;
    ok(null, expect);
  }); */
});
