const fs = require('fs')

const readStream = fs.createReadStream('./test.txt')

let length = 0

readStream.on('data', function(chunk) {
  let len = chunk.toString().length
  console.log('len ',len)
  length += len
})

readStream.on('end', function() {
  console.log('length', length)
})