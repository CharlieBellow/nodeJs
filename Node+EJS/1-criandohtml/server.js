//chamando o express instalado:

const express = require('express'); 
// vai pegar tudo que estamos construindo e colocar aqui e renderizar pra mostrar no navegador

// instanciando o express e guardando na variável app
const app = express();

// falando pro express que vamos usar o ejs pra ver o HTML
app.set("view engine", "ejs");

// criando uma rota
app.get("/", function (req, res) {
  const items = [
    {
      title: "D",
      message: "esenvolver aplicações....."
    },
    {
      title: "E",
      message: "JS"
    },
    {
      title: "M",
      message: "uito fácil"
    },
    {
      title: "A",
      message: "morzinho"
    },
    {
      title: "I",
      message: "nstall ejs"
    },
    {
      title: "S",
      message: "intaxe simples"
    }
  ];

  const subtitle = "uma linguagem de modelagem para criação de páginas HTML utilizando javascript"

  
  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle, 
  });
})

app.get("/sobre", function (req, res) {
  res.render("pages/about");
});

// ouvindo a porta 8080 pro servidor rodar na máquina
app.listen(8080);
console.log("rodando");
// pra rodar o programa: $ node server. pra parar de rodar: $ ^Ĉ (ctrl+C)

// para rodar no navegador tem que colocar o arquivo index dentro de uma pasta de nome views e rodar $ node server no terminal e depois abrir o localhost:8080 no navegador

console.log('servidor funcionando');
// OBS.: toda vez que fizer alteração no arquivo.js precisa parar o servidor e rodar de novo pra atualizar as alterações. no arquivo.ejs não precisa parar