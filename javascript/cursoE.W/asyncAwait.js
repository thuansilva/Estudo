function obterUsuario() {
  return new Promise(function person(resolve, reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        name: "thuan",
      });
    }, 2000);
  });
}

function obterEndereco(id_usuario) {
  return new Promise(function (resolve, reject) {
    setInterval(() => {
      return resolve({
        usuario: id_usuario,
        rua: "rua dos bobos",
        numero: 0,
      });
    }, 2000);
  });
}

async function main() {
  try {
    const usuario = await obterUsuario();
    const endereco = await obterEndereco(usuario.id);
    console.log(usuario, endereco);
  } catch (error) {
    console.log("Deu error", error);
  }
}

main();
