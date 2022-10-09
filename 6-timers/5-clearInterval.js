// clearInterval irá cancelar um setInterval registrado

const timeOut = 1000
const checking = () => console.log('checking!');

let interval = setInterval(checking, timeOut)

setTimeout(() => clearInterval(interval), 3000)
// mesmo que aqui esteja em 3 segundos, ele só vai executar duas vezes pq eles começam juntos.
