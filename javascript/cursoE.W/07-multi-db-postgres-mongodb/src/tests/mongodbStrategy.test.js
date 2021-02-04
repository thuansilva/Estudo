const assert = require("assert");
const Mongodb = require("../db/strategies/mongoDB");
const TypeDatabase = require("../db/strategies/base/constextStrategy");

const context = new TypeDatabase(new Mongodb());

describe("Mongo DB suite de testes", function () {
  this.beforeAll(async () => {
    await context.connect();
  });
  it("Testar conexão ao Mongodb", async () => {
    const statusConection = await context.isConnected();
    assert.deepStrictEqual(statusConection, "connected");
  });
});
