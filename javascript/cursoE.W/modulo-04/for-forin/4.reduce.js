const { obterPessoas } = require("./server");
Array.prototype.meuReduce = function (callback, valorinicial) {
  valorFinal = typeof valorinicial !== undefined ? valorinicial : this[0];
  for (let i = 0; i < this.length; i++) {
    valorinicial = callback(valorinicial, this[i], this);
  }
  return valorinicial;
};

async function main() {
  try {
    const { results } = await obterPessoas();
    const pesos = results.map((item) => parseInt(item.height));
    console.log("valor dos pesos", pesos);
    // o reduce recebe dois valores, então nos podemos fazer uma junçao desses

    /*     const total = pesos.reduce(function (anterior, proximo) {
      return anterior + proximo;
    });
 */

    // Criação do meu proprio reduce
    const total = pesos.meuReduce(function (valor1, valor2) {
      return valor1 + valor2;
    });

    console.log("valor total", total);
  } catch (error) {
    console.error("DEU RUIM", error);
  }
}

main();
