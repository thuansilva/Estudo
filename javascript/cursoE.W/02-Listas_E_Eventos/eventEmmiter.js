const eventEmmiter = require("events");

class Emissor extends eventEmmiter {}

const event = new Emissor(); // criar uma nova instância da classe
const nomeEvento = "click";

// //padrao observer, ou seja quando for emitido um evento é que vai executar
// event.on(nomeEvento, function (click) {
//   console.log(`Um usuário clickou,`, click);
// });

// // emitir um evento
// event.emit(nomeEvento, "na barra");

const stdin = process.openStdin(); // pega o método

// pega a função addListener
stdin.addListener("data", function (value) {
  console.log(`voce digitou: ${value.toString().trim()}`); // o value pega o valor vindo do terminal
});

// OBSERVAÇÕES
// Diferentemente das promisses os eventos podem ser executados varias vezes, ja as promisses e os callbacks apenas uma
// Caso tente a primeira vez funciona mas depois da error
