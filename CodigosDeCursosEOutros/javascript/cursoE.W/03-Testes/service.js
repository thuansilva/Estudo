const axios = require("axios");

function obterPessoas(nome) {
  const url = `https://swapi.dev/api/people/?search=${nome}&format=json`;
  const resposta_api = axios.get(url).then((response) => {
    return response.data.results.map((item) => {
      return {
        nome: item.name,
        peso: item.height,
      };
    });
  });

  return resposta_api;
}

module.exports = {
  obterPessoas,
};
