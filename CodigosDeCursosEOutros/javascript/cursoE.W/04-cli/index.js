const Commander = require("commander");
const Database = require("./database");
const Heroi = require("./heroi");

async function main() {
  Commander.version("v1")
    .option("-n --nome [value]", "Nome do Heroi")
    .option("-i --id [value]", "Id do heroi")
    .option("-p --poder [value]", "Poder do heroi")
    .option("-c --cadastrar", "Cadastrar um heroi")
    .option("-l --listar", "Listar um heroi")
    .option("-r --remover", "Remover um heroi pelo id")
    .option("-a --atualizar [value]", "Atualizar um heroi")

    .parse(process.argv);
  const heroi = new Heroi(Commander);
  try {
    delete heroi.id;
    if (Commander.cadastrar) {
      const resultado = await Database.cadastrar(heroi);
      if (!resultado) {
        console.error("heroi não cadastrado!");
        return;
      }
      console.log("Heroi cadastrado com sucesso!");
    }
    if (Commander.listar) {
      const resultado = await Database.listar();
      console.log(resultado);
      return;
    }
    if (Commander.remover) {
      const resultado_remover = await Database.remover(heroi.id);
      if (!resultado_remover) {
        console.error("Não foi possivel remover o heroi!");
        return;
      }
      console.log("Heroi removido com sucesso!");
    }
    if (Commander.atualizar) {
      const idParaAtualizar = parseInt(Commander.atualizar);
      // delete heroi.id;
      const dado = JSON.stringify(heroi);
      const heroiAtualizar = JSON.parse(dado);
      const resultado = await Database.atualizar(
        idParaAtualizar,
        heroiAtualizar
      );
      if (!resultado) {
        console.log("Não foi possivel atualizar o heroi ");
        return;
      }
      console.log("Heroi atualizado com sucesso!");
    }
  } catch (error) {
    console.error("Deu Ruim", error);
  }
}

main();
