# Como funciona?

Vamos ver o motivo do Node.js ser tão rápido

- Imagine...

Uma batalha entre 2 restaurantes... 
Qual terá o melhor atendimento?

Restaurante do Tio Apache

• Diferencial: Cada cliente tem seu próprio garçon

  * Um cliente vai fazer o pedido de uma pizza

        - Um garçon é direcionado até sua mesa

        - Pega o pedido e leva até a cozinha, para o chef preparar

        - O chefe, por regra do restaurante, irá proibir e bloqueado o garçon de voltar para o cliente, que o pedido fique pronto.

        - O cliente queria muito fazer mais pedidos, mas não pode, pois o garçon está bloqueado
        
        - Após o pedido ficar pronto, o garçon leva de volta para o cliente

  * O cliente foi embora e por regra do restaurante, o garçon é despedido



Chegou 100 clientes numa noite

  * O gerente precisou contratar mais garçon...

      É um serviço caro e de primeira, mas lento né? A regra de bloquear os garçons e ter que contratar um garçon para cada cliente, torna o serviço caro e lento.



Resturante do Noderson

• Diferencial: O garçon de nome Eveneto Lupin

  * Mesa 1: O cliente vai fazer o pedido de uma pizza
    - Eveneto Lupin pega o pedido e leva para o Chef
    - Volta com gosto de gás para a próxima mesa

  * Mesa 2: O cliente faz o pedido de uma salada
    - Eveneto Lupin já pegou o pedido e levou para o Chef

  * O chef tocou um sininho avisando que o pedido da mesa 1 já ficou pronto e Eveneto corre pra pegar e fazer a entrega do pedido


O segredo de Eveneto é que ele sabe trabalhar de maneira assíncrona, fazendo mais de 1 evento de cada vez e não tem nada que o bloqueie. Ele é muito solicitado e faz seu trabalho muito bem feito


# Decifrando...

Tio Apache = Apache

Noderson = Node

Cliente = Usuário

Pedido = Request

Garçon = Thread

Cozinha = Servidor

Chef = Bando de Dados

Eveneto Lupin = Event Loop

Node é single-threaded, non-blocking e asynchronous.



# avançando no entendimento

```js

function c() {
  setTimeout(() => {console.log('c)}, 0)
  return
}

function b() {
  console.log('b')
  return c()
}

function a() {
  b()
  console.log('a')
  return
}

a()

// aí retorna

b
a
undefined
c


```


# de onde veio para onde vai

História

Ryan Dahl em 2009

NPM Versão 1 em 2011 https://npmjs.org

  - Compartilhamento de bibliotecas

  - Grande mudança na manutenção e compartilhamento de códigos

2015 Node.js Foundation

  - Incluiu: IBM, Microsoft, PayPal e Groupon

  - Passou a fazer parte do https://openjsf.org/

https://github.com/nodejs/node

Comunidade ativa!
