//emitindo um evento

const { EventEmitter } = require('events')

const ev = new EventEmitter()

//ouvindo eventos:
ev.on('saySomething', (message) => {
  console.log('eu ouvi você', message);
})


// disparando eventos

ev.emit('saySomething', 'charlie')
ev.emit('saySomething', 'mayk')

