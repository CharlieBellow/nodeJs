# NPM

Node Package Manager

__Glossary: Dependencies, Packages, Modules____

- [ ] Verificar se temos o npm instalado npm -v

- [ ] Criar nosso próprio pacote

# criando o progeto:

$ npm init -y

    - vai retornar:

Wrote to /home/charlie/Documentos/cursos online/Dev/NodeJS/4-NPM_Node-Package-Manenger/package.json:

{
  "name": "4-npm_node-package-manenger",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

- [ ] O que é o arquivo package.json

- [ ] Utilizar módulos de terceiros

instalar o módulo na pasta do projeto:
$ npm install cfonts

# 5 - dependencias de desenvlvimento e instalação:

$ npm i cfonts -D

$ npm i cfonts inquirer opn

$ npm update


- [ ] 0 que é o diretório node modules

  # 6 - 0 que é o diretório node modules

quando tem as Devdependencies, quer dizer que os módulos só vão ser instalados para quem está desenvolvendo.e quand chegar no usuário final não vai ser instalado

- OBS.: não envia essa pasta (node_modules) pro repositório.
pra isso, cria um arquivo .gitignore e coloca na lista de arquivos a serem ignorados quando for pro git

- [ ] 0 que é o arquivo package-lock.json

# 7 - package-lock.json

- não mecha nele. ele faz manutenção de modulos e mapeia ele


- [ ] Criar scripts para rodar com o npm

# 8 - criando e rodando scripts

$ npm run test

* alterei o package.json para:
 "scripts": {
    "start": "node index.js"

$ npm run start
ou 
$ npm start // qualquer outro comando precisa do run depois do npm


# 9 - Instalando dependâncias globais

  [ ] Instalar pacote de maneira global

- se eu quiser instalar um módulo como um todo

$ npm i opn -g (-g = global)

- nesse caso, nao fica nos arquivos json, pra aber onde tá e se stá instalado roda esse comando:

$ npm root -g




  [ ] Desinstalar pacotes

para desistalar:
$ npm uninstall opn -g


  [ ] Mudar versão de pacotes

# 10 - gerenciando versões das dependências

$ npm i moment
$ npm i moment@latest (instala a última versão)

vai instalar isso no package.json:

"moment": "^2.29.1" = major.miner.patch

que significa:
patch: resolvendo algum bug no pacote
minor: tem alterações, mas não vai quebrar o que tá acontecendo
major: é a versão do pacote e tem alterações que podem quebrar
^: vai atualizar o minor e o patch
~: vai atualizar só o patch
(se não tiver nada): vai manter a versão e nunca vai atualizar
"*": vai mudar todas as versões


  - para mudar de versão:

$ npm outdated


# 11 - removendo pacotes

$ nm uninstall moment