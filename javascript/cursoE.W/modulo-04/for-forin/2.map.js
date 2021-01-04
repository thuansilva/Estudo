const server = require("./server");

// Construindo meu proprio array.map
Array.prototype.meuMap = function (callback) {
  const novoArrayMapeado = [];
  for (let indice = 0; indice < this.length; indice++) {
    const dado = callback(this[indice], indice);
    novoArrayMapeado.push(dado);
  }
  return novoArrayMapeado;
};

async function main() {
  try {
    const results = await server.obterPessoas();
    // const names = [];
    //o ForEach recebe uma função e pega o item do array e manipula
    /*     
  
    results.results.forEach(function (item) {
      names.push(item.name);
    }); 
    */

    //O  array.map usa um função para pegar s objetos (um de  cada vez ) e mapeia para retornar.
    /*
    const names = results.results.map(function (pessoa) {
      return pessoa.name;
    });
    */

    const names = results.results.meuMap(function (pessoa, indice) {
      return pessoa.name;
    });

    console.log("names", names);
  } catch (error) {
    console.error("deu error", eroor);
  }
}

main();
