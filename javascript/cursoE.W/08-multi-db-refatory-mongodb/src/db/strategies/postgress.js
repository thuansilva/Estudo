const Icrud = require("./interface/interfaceCrud");
const Sequelize = require("sequelize");

class ImplemetedPostress extends Icrud {
  constructor() {
    super();
    this._driver = null;
    this._herois = null;
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

  async connect() {
    this._driver = new Sequelize("herois", "thuan", "minhasenhasecreta", {
      host: "localhost",
      dialect: "postgres",
      quoteIdentifiers: false,
      operatorsAlieses: false,
    });
    await this.defineModel();
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
