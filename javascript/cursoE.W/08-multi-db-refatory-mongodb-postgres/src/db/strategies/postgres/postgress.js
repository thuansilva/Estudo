const Icrud = require("../interface/interfaceCrud");
const Sequelize = require("sequelize");

class ImplemetedPostress extends Icrud {
  constructor(connection, modelSchema) {
    super();
    this._driver = connection;
    this._herois = modelSchema;
  }
  async isConnected() {
    try {
      await this._driver.authenticate();
      return true;
    } catch (error) {
      console.error("fail", error);
      return false;
    }
  }

  static connect() {
    const connected = new Sequelize("herois", "thuan", "minhasenhasecreta", {
      host: "localhost",
      dialect: "postgres",
      quoteIdentifiers: false,
      operatorsAlieses: false,
      logging: false,
    });
    return connected;
  }

  static defineModel(connection, modelSchema) {
    const schemaDatabaseHerois = connection.define(
      modelSchema.nome,
      modelSchema.schema,
      modelSchema.option
    );
    schemaDatabaseHerois.sync();
    return schemaDatabaseHerois;
  }

  async create(item) {
    const { dataValues } = await this._herois.create(item);
    return dataValues;
  }
  async read(item = {}) {
    return await this._herois.findAll({ where: item, raw: true });
  }
  async update(id, item) {
    return await this._herois.update(item, { where: { id: id } });
  }
  async delete(id) {
    const query = id ? { id } : {};
    return await this._herois.destroy({ where: query });
  }
}

module.exports = ImplemetedPostress;
