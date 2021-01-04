const server = require("./server");

async function main() {
  try {
    const result = await server.abterPessoas();
    const names = [];
    /*  
    for (let i = 0; i <= result.results.length - 1; i++) {
      let pessoa = result.results[i];
      names.push(pessoa.name);
    }
    console.log("names", names);
    */
    // #########################################################################
    // For in: cria uma variavel i, mas não precissa iniciar ela e passa o aray em questão
    /* 
    for (let i in result.results) {
      let pessoa = result.results[i];
      names.push(pessoa.name);
    }
    console.log("names", names);
     */
    // #########################################################################
    // For of: ele ja mapeia o array em questão e coloca os dados na variavél

    for (pessoa of result.results) {
      names.push(pessoa.name);
    }
    console.log("names", names);
  } catch (error) {
    console.error("Deu Error", error);
  }
}

main();
