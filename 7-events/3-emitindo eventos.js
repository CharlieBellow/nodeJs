//emitindo um evento

const { EventEmitter } = require('events')

const ev = new EventEmitter()

// disparando eventos

ev.emit('saySomething')
ev.emit('saySomething')

