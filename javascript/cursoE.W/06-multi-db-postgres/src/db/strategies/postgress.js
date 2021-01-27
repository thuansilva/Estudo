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

  async defineModel() {
    this._herois = this._driver.define(
      "herois",
      {
        id: {
          type: Sequelize.INTEGER,
          required: true,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
          type: Sequelize.STRING,
          required: true,
        },
        poder: {
          type: Sequelize.STRING,
          required: true,
        },
      },
      {
        tableName: "TB_HEROIS",
        freezeTableName: false,
        timestamps: false,
      }
    );
    await this._herois.sync();
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
}

module.exports = ImplemetedPostress;
