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
  isConnected() {
    throw new NotImplemetedExceptions();
  }
  connected() {
    throw new NotImplemetedExceptions();
  }
}

module.exports = Icrud;
