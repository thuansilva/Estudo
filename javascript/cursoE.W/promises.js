function obterUsuario() {
  return new Promise(function resolvPromisse(resolve, reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        name: "thuan",
      });
    }, 1000);
  });
}
function obterEndereco(id_usuario) {
  return new Promise(function resolvPromisse(resolv, reject) {
    setTimeout(() => {
      return resolv({
        usuario: id_usuario,
        rua: "rua dos bobos",
        numero: 0,
      });
    }, 2000);
  });
}

function obeterTelefone(id_usuario) {
  return new Promise(function resolvPromissa(resolv, reject) {
    setTimeout(() => {
      return resolv({
        usuario: id_usuario,
        telefone: 09090939,
      });
    }, 100);
  });
}

const user = obterUsuario();
//para manipular o sucesso usamos a função .then()
//para manipular o fracasso usamos a função .cath()
user
  .then(function (user) {
    return obterEndereco(user.id).then((resolvEnd) => {
      return {
        user: user,
        end: resolvEnd,
      };
    });
  })
  .then(function (resultado) {
    return obeterTelefone(resultado.user.id).then((resolvTel) => {
      return {
        user: resultado.user,
        logaradouro: resultado.end,
        telefone: resolvTel,
      };
    });
  })
  .then((resultado) => console.log(resultado))
  .catch();
