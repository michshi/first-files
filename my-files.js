const { red, yellow } = require('chalk')
const path = require('path')
const fs = require('fs')

const filename = path.join(__dirname, 'text.txt')

// console.log(yellow(filename))

// fs.readdir(__dirname, (err, files) => {
//   if (err) {
//     console.log(red(err))
//   }
//   else {
//     console.log(files)
//   }
// })
// console.log(yellow('Hello'))

fs.readFile(filename, 'utf-8', (err, data) => {
  if (err) {
    return console.log(err)
  }

  const lines = data.split('\n').filter(x => x.length > 0)

  console.log(lines)
})
