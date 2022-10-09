// Criando módulos

// o que precisa ter no outro arquivo .js que quero linkar com esse:
//module.exports = "enviando dados do meu módulo" /* pode atribuir qualquer coisa: arry, string, número, objeto... */

//  que preciso colocar nesse arquivo pra linkar?
const myModule = require('./exports.js')

console.log(myModule);
// depois disso é só executar no $ node nome desse arquivo em que está o require



