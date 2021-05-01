const assert = require("assert");
const api = require("../api");
let app = {};

describe("Suite de testes da API Heroes", function () {
  this.beforeAll(async () => {
    app = await api;
  });

  it("listar /herois", async () => {
    const result = await app.inject({
      method: "GET",
      url: "/herois?skip=0&limit=10",
    });
    assert.deepStrictEqual(result.statusCode, 200);
  });

  it("listar /herois - Deve retornar apenas 3 registros", async () => {
    const TAM_LIMIT = 3;
    const result = await app.inject({
      method: "GET",
      url: `/herois?skip=0&limit=${TAM_LIMIT}`,
    });
    const dados = JSON.parse(result.payload);
    assert.deepStrictEqual(result.statusCode, 200);
    assert.ok(dados.length === TAM_LIMIT);
  });

  it("listar /herois - Deve passar apenas numeros no skip e limit ", async () => {
    const TAM_LIMIT = "aanNN";
    const result = await app.inject({
      method: "GET",
      url: `/herois?skip=0&limit=${TAM_LIMIT}`,
    });
    assert.deepStrictEqual(result.statusCode, 400);
  });

  it("listar /herois - Deve filtar um item ", async () => {
    const HEROI = "Flash";
    const result = await app.inject({
      method: "GET",
      url: `/herois?skip=0&limit=100&nome=${HEROI}`,
    });
    assert.deepStrictEqual(result.statusCode, 200);
  });
});
