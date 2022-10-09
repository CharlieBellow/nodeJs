// SetTimeout roda uma função depois de x milissegundos

const timeOut = 3000 //3000 milissegundo = 3 segundo

const finished = () => console.log('done')

setTimeout(finished, timeOut)
//pede dois argumentos: a função que vai rodar

//a função finished é uma função callback depois de 3 segundos

// eventloop qualquer coisa se eu coloque aqui embaixo vai ser executado antes daquela função que está prevista pra aparecer depois de 3 segundos
console.log('mostrar');