const pegaArquivo = require('./index')

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
  const resultado = await pegaArquivo(caminhoDeArquivo[2]);
  console.log('lista de links', resultado);
}

processaTexto(caminho);


//console.log(pegaArquivo(caminho[2]));

// pra rodar esse arquivo sem precisar digirar todo o comando é só criar um script pra ele no arquivo package.json na parte de scripts:
// "cli": "node cli.js ./arquivos/texto1.md"

// fica assim:

//"scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1",
//    "cli": "node cli.js ./arquivos/texto1.md"
//  }

// e pra rodar no terminal:
// npm run cli