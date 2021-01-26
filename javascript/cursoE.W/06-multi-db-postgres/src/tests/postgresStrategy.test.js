const assert = require("assert");
const Postgres = require("../db/strategies/postgress");
const Context = require("../db/strategies/base/constextStrategy");

const context = new Context(new Postgres());

describe("Postgres Strategy", function () {
  this.timeout(Infinity);
  it("Postgres Sql Connection", async function () {
    const result = await context.isConnected();
    assert.deepStrictEqual(result, true);
  });
});
