const ContextStrategy = require("./strategies/base/constextStrategy");
const ImplemetedMongoDb = require("./strategies/mongoDB");
const ImplemetedPostress = require("./strategies/postgress");
const contextMongo = new ContextStrategy(new ImplemetedMongoDb());
contextMongo.create();
contextMongo.delete();

const contextPostgres = new ContextStrategy(new ImplemetedPostress());
contextPostgres.create();
