const EventEmitter = require('events').EventEmitter

// const emitter1 = new EventEmitter()
// emitter1.on('some', () => {
//   console.log('some event is occured 1')
// })
// emitter1.on('some', () => {
//   console.log('some event is occured 2')
// })
// setTimeout(()=> {
//   emitter1.emit('some')
// }, 1000)
// setTimeout(()=> {
//   emitter1.emit('some')
// }, 2000)


const emitter1 = new EventEmitter()
emitter1.on('some', name => {
  console.log('some event is occured', name)
})
setTimeout(()=> {
  emitter1.emit('some', 'hello')
}, 1000)
setTimeout(()=> {
  emitter1.emit('some', 'world')
}, 2000)