const { obterPessoas } = require("./server");

Array.prototype.meuFilter = function (callback) {
  const lista = [];
  for (index in this) {
    const item = this[index];
    const result = callback(item, index, this);
    if (!result) continue;
    lista.push(item);
  }
  return lista;
};

async function main() {
  //o try catch só chamamos na ultima camada
  try {
    const { results } = await obterPessoas();
    /*     
    Por padrao o filter retorna um booleano
    para informar se deve manter ou remover da lista
    false -> remove da lista
    não encontro = -1
    encontrou = posição no Array 
    */
    /* 
    const familiaLars = results.filter(function (item) {
      const result = item.name.toLowerCase().indexOf("lars") !== -1;
      return result;
    });
     */

    const familiaLars = results.meuFilter(function (item, index, lista) {
      return item.name.toLowerCase().indexOf("lars") !== -1;
    });

    const names = familiaLars.map((pessoa) => pessoa.name);
    console.log("familiaLars", names);
  } catch (error) {
    console.error("Deu ruin", error);
  }
}

main();
