const path = require('path')

function resolve(fileOrDirPath) {
  return path.resolve(__dirname, fileOrDirPath)
}

module.exports = {
  resolve,
}
