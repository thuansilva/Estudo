const axios = require("axios");

function abterPessoas(nome) {
  const url = `https://swapi.dev/api/people/`;
  const resposta_api = axios.get(url).then((response) => {
    return response.data;
  });
  return resposta_api;
}

module.exports = {
  abterPessoas,
};
