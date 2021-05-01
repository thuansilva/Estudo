class ContextStrategy {
  constructor(strategy) {
    this._database = strategy;
  }
  create(item) {
    return this._database.create(item);
  }
  read(query, skip, limit) {
    return this._database.read(query, skip, limit);
  }
  update(id, item) {
    return this._database.update(id, item);
  }
  delete(id) {
    return this._database.delete(id);
  }
  isConnected() {
    return this._database.isConnected();
  }
  static connect(connection, schemaModel) {
    return this._database.connect(connection, schemaModel);
  }
}

module.exports = ContextStrategy;
