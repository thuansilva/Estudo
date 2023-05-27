const axios = require("axios");

function obterPessoas(nome) {
  const url = `https://swapi.dev/api/people/`;
  const resposta_api = axios.get(url).then((response) => {
    return response.data;
  });
  return resposta_api;
}

module.exports = {
  obterPessoas,
};
