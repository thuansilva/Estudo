// Modelo de como trabalhar com funções assincronas que usam callbacks

function obterUsuario(callback) {
  // Função que simula um banco de dados assyncrono
  setTimeout(() => {
    // callback é a função que será passada para espeerar o resultado
    return callback(null, {
      id: 1,
      nome: "thuan aguiar",
    });
  }, 5000);
}

// Função que chama a função assyncrona

obterUsuario(function user(error, response) {
  // o primeiro parametro que rescebemos é sempre um erro, o segundo e p resultado da função
  if (error) {
    console.log("error no callback", error);
    return;
  }
  console.log(response);
});
