// herdando do eventEmitter

const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
  this.name = name
}
// uma coisa herdando coisas de outra coisa
inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin');

chapolin.on('help', () => console.log(`Eu o ${chapolin.name} colorado!`))
/* chapolin, fique escutando a palavra help. quando ela aparece, diga eu o chapolin colorado */

console.log('oh! e agora, quem poderá me defender?');
chapolin.emit('help')