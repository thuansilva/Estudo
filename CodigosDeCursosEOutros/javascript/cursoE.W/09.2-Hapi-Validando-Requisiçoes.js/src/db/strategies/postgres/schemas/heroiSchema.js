const Sequelize = require("sequelize");

const SchemaHerois = {
  nome: "herois",
  schema: {
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
  option: {
    tableName: "TB_HEROIS",
    freezeTableName: false,
    timestamps: false,
  },
};

module.exports = SchemaHerois;
