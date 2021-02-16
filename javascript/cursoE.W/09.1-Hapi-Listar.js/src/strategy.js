class NotImplemetedExceptions extends Error {
  constructor() {
    super("Not Implemeted Exception");
  }
}

class Icrud {
  create(item) {
    throw new NotImplemetedExceptions();
  }
  read(query) {
    throw new NotImplemetedExceptions();
  }
  update(id, item) {
    throw new NotImplemetedExceptions();
  }

  delete(id) {
    throw new NotImplemetedExceptions();
  }
}

class ImplemetedMongoDb extends Icrud {
  constructor() {
    super();
  }
  create(item) {
    console.log("O item foi criado no MongoDB!");
  }
}

class ImplemetedPostress extends Icrud {
  constructor() {
    super();
  }
  create(item) {
    console.log("O item foi criado no Postgress!");
  }
}

class ContextStrategy {
  constructor(strategy) {
    this._database = strategy;
  }
  create(item) {
    return this._database.create(item);
  }
  read(query) {
    return this._database.query(query);
  }
  update(id, item) {
    return this._database.update(id, item);
  }
  delete(id) {
    return this._database.delete(id);
  }
}

const contextMongo = new ContextStrategy(new ImplemetedMongoDb());
contextMongo.create();

const contextPostgres = new ContextStrategy(new ImplemetedPostress());
contextPostgres.create();
