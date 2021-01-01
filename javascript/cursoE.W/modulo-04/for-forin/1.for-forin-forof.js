const server = require("./server");

async function main() {
  try {
    const result = await server.abterPessoas();
    const names = [];
    for (let i = 0; i <= result.results.length - 1; i++) {
      let pessoa = result.results[i];
      names.push(pessoa.name);
    }
    console.log("names", names);
  } catch (error) {
    console.error("Deu Error", error);
  }
}

main();
