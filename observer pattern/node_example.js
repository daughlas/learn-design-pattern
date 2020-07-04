const EventEmitter = require('events').EventEmitter

class Dog extends EventEmitter {
  constructor(name) {
    super()
    this.name = name
  }
}

var simon = new Dog('simon')
simon.on('bark', function() {
  console.log(this.name, 'barked')
})
setInterval(() => {
  simon.emit('bark')
}, 500)