class Grafo {
  constructor() {
    this.adjacencia = {}; // é um objeto que vai guardar os certices e suas conexões
  }

  adicionarVertices(vertice) {
    if (!this.adjacencia[vertice]) {
      // se esse vertice nao estiver sido criado ele cria com um array vazio;
      // dessa forma o array vai armazenas as arestas e pretecentes aos vertices;
      this.adjacencia[vertice] = [];
    }
  }

  adicionarAresta(vertice1, vertice2) {
    if (!this.adjacencia[vertice1]) {
      this.adicionarVertices(vertice1);
    }
    if (!this.adjacencia[vertice2]) {
      // Verifica se nao está conectando
      this.adicionarVertices(vertice2);
    }

    this.adjacencia[vertice1].push(vertice2);
    this.adjacencia[vertice2].push(vertice1);
  }

  mostrarGrafo() {
    for (let vertice in this.adjacencia) {
      console.log(`${vertice} -> ${this.adjacencia[vertice].join(", ")}`);
    }
  }

  dfs(vertice, visited = new Set()) {
    if (visited.has(vertice)) {
      return;
    }
    console.log(vertice);
    visited.add(vertice);

    for (const vizinho of this.adjacencia[vertice]) {
      this.dfs(vizinho, visited);
    }
  }
}

// Criando o grafo
const grafo = new Grafo();
grafo.adicionarAresta("A", "B");
// grafo.adicionarAresta("A", "C");
// grafo.adicionarAresta("B", "D");
// grafo.adicionarAresta("C", "D");

// Mostrar o grafo
grafo.mostrarGrafo();

// grafo.dfs("A");

if (A1 * A4 == A2 * A3) {
  console.log("S");
} else {
  console.log("N");
}
