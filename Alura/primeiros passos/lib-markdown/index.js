//const chalk = require("chalk");
//import chalk from 'chalk';
const fs = require('fs');



/* 

pra iniciar um projeto de node js é necessário criar a pasta que você quer que o programa fique e abrir ela no terminal. Então digita:
$ npm init -y

para achar rapidamente algum conteúdo retornado pelo node, instala essa biblioteca
$ npm install chalk 

// o CHALK não funciona
e escreve isso no início do arquivo pra ele poder funcionar: const chalk = require('chalk');

pra usar o chalk chama ele e coloca . mais a cor que você quer que apareça:

console.log(chalk.blue("vamos começar"));


depois cria o arquivo .gitignore e escreve os arquivos e pastas que devem ser ignorados. Ex.:
node_modules


*/


// expressões regulares 




function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#/s].[^\s]*)\)/gm;

  const arrayResultados = [];
  let temp;

  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] })
  }
  return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
}



function trataErro(erro) {
  throw new Error(erro.code, 'o caminho não é um diretório válido');

}


//function pegaArquivo(caminhoDoArquivo) {
//  const encoding = 'UTF-8';
//  fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//    if (erro) {
//      trataErro(erro);
//    }
//    console.log(texto);
//    // o _ dentro dos parênteses, serve pra ignorar o parametro da função, serve pra quando não quiser passar ele
//  }
//  )
//}

// 1ª forma: criando as promises para código assíncrono
//
//function pegaArquivo(caminhoDoArquivo) {
//  const encoding = 'UTF-8';
//  fs.promises
//    .readFile(caminhoDoArquivo, encoding)
//    .then((texto) => console.log(texto))
//    .catch((erro) => trataErro(erro))
//}
 

//2ª forma: async await

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
     return extraiLinks(texto);
  } catch (erro) {
    trataErro(erro);
  } finally {
    console.log('operação concluída');
  }
}



//pegaArquivo('./arquivos/texto1.md');
module.exports = pegaArquivo;


/* 

Nessa aula, você aprendeu
Que podemos utilizar a lib fs (File System, ou sistema de arquivos) nativa do JavaScript para que o programa consiga acessar e ler arquivos do computador;
Que conseguimos capturar mensagens de erro enviadas pelo NodeJS quando algo no programa não sai como o esperado utilizando a palavra-chave throw, ou lançar;
Que as “promessas” são a forma que o JavaScript utiliza para trabalhar com código assíncrono e que podemos resolvê-las utilizando em conjunto as palavras-chave async e await ou o método .then().

3- capturando links:

- expressões regulares:
Como vimos nesta aula, expressões regulares são objetos que mapeiam padrões de texto por meio de uma linguagem própria, com sintaxe e regras específicas. Elas são uma ferramenta eficiente para resolver problemas de código que envolvem padrões e buscas textuais.

Cada linguagem de programação desenvolve seu próprio interpretador de expressões regulares; no caso do JavaScript podemos usar // e salvar o padrão em uma variável, como foi feito nos vídeos, ou utilizar o construtor new RegExp():

const regex = /[a-zA-z\s]/;
ou
let regex = new RegExp("[a-zA-z\s]");


Nessa aula, você aprendeu
Como utilizar expressões regulares, uma sintaxe feita para reconhecer padrões de texto, para capturar links e URLs;
Como utilizamos classes e grupos de expressões regulares para refinar a busca por estes padrões, além dos métodos que o JavaScript tem (por exemplo match e exec) para trazer os resultados e trabalhar com eles;
A manipular os resultados extraídos do texto através de expressões regulares e montar um objeto de retorno utilizando a sintaxe do JavaScript.

*/

// expressão regular para pegar links de sites
// /https?:\/\/[^\s$.?#].[^\/\s]*\/.[^\ ,.)]*/gm 





