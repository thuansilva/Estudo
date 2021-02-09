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
      url: "/herois",
    });
    assert.deepStrictEqual(result.statusCode, 200);
  });
});
