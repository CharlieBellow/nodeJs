//emitindo um evento

const { EventEmitter } = require('events')

const ev = new EventEmitter()

//ouvindo eventos uma única vez com o once:
ev.once('saySomething', (message) => {
  console.log('eu ouvi você', message);
})


// disparando eventos

ev.emit('saySomething', 'charlie')
ev.emit('saySomething', 'mayk')

