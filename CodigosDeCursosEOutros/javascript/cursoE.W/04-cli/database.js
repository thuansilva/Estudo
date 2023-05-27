const { readFile, writeFile } = require("fs");

const { promisify } = require("util");
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

class Database {
  constructor() {
    this.NOME_ARQUIVO = "herois.json";
  }
  async obterDadosArquivos() {
    const arquivo = await readFileAsync(this.NOME_ARQUIVO, "utf8");
    return JSON.parse(arquivo.toString());
  }
  async escreverDadosArquivo(dados) {
    await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados));
    return true;
  }
  async cadastrar(heroi) {
    const dados = await this.obterDadosArquivos();
    const id = heroi.id <= 2 ? heroi.id : Date.now();

    const heroiComID = {
      id,
      ...heroi,
    };
    const dadosFinal = [...dados, heroiComID];
    const resultado = await this.escreverDadosArquivo(dadosFinal);
    return resultado;
  }
  async listar(id) {
    const dados = await this.obterDadosArquivos();
    const dadosFiltrados = dados.filter((item) => (id ? item.id === id : true));
    return dadosFiltrados;
  }
  async remover(id) {
    if (!id) {
      return await this.escreverDadosArquivo([]);
    }
    const dados = await this.obterDadosArquivos();
    const indice = dados.findIndex((item) => item.id === parseInt(id));
    if (indice === -1) {
      throw Error("O usuario não existe");
    }
    dados.splice(indice, 1);
    return await this.escreverDadosArquivo(dados);
  }

  async atualizar(id, modificacoes) {
    const dados = await this.obterDadosArquivos();
    const indice = dados.findIndex((item) => item.id === parseInt(id));

    if (indice === -1) {
      throw Error("o heroi  informado nao existe");
    }
    const atual = dados[indice];
    const objetoAtualizar = {
      ...atual,
      ...modificacoes,
    };

    dados.splice(indice, 1);
    return await this.escreverDadosArquivo([...dados, objetoAtualizar]);
  }
}

module.exports = new Database();
