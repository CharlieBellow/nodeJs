// Pegando informações do processo

//console.log(process);
// $ node nome do arquivo (nesse caso: 4 - pegando informações do processo.js)
// no que retornar procura o argv


//lista de argumentos
/*
console.log('seu nome é', process.argv[2] + ' ' + process.argv[3]);
*/

//melhorando o código:
const firstName = process.argv[2]
const lastName = process.argv[3]

console.log(`seu nome é ${firstName} ${lastName}`);

//aí roda no programa:
// $ node 4\ -\ pegando\ informações\ do\ processo.js charlie bellow
