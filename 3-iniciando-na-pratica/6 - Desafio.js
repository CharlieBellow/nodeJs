/*Crie 2 arquivos JavaScript.

* O primeiro, irá exportar um função chamada getFlag ()
* que receberá um argumento do tipo String.
* Essa função deverá buscar dentro do array processs.argv a flag e retornar o valor da flag

* 0 segundo irá importar a função e passar a flag desejada.
* Iremos rodar no terminal o segundo arquivo passando as flags --name e-greeting * para que seja impresso no terminal a saudação e o nome da pessoa,*/

// como eu fiz:

/*const getFlag = function getFlag() {
  const primeiroNome = process.argv[2]
  const segundoNome = process.argv[3]
  console.log(`tudo bem? ${primeiroNome} ${segundoNome}` + process.argv);
}

console.log(getFlag());
*/

//como ele ensinou:

function getFlags(flag) {
  const index = process.argv.indexOf(flag) + 1 /* procura o número da flag aqui dentro */
  return process.argv[index]
}

module.exports = getFlags;
