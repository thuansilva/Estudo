class Grafo {
  constructor() {
    this.adjacencia = {};
  }

  criarVertice(v) {
    if (!this.adjacencia[v]) {
      this.adjacencia[v] = [];
    }
  }

  criarAresta(v1, v2) {
    if (!this.adjacencia[v1]) {
      this.criarVertice(v1);
    }

    if (!this.adjacencia[v2]) {
      this.criarVertice(v2);
    }

    this.adjacencia[v1].push(v2);
    this.adjacencia[v2].push(v1);
  }

  showGrafo() {
    for (let vertice in this.adjacencia) {
      console.log(`${vertice} -> ${this.adjacencia[vertice]}`);
    }
  }
}

const grafo = new Grafo();

grafo.criarAresta("A", "B");

grafo.showGrafo();
