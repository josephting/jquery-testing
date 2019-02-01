const path = require('path')
const fs = require('fs')

const getFileOptions = options => {
  const opts = typeof options === 'string' ? { encoding: options } : options || {}
  const fileOpts = {
    encoding: opts.encoding || 'utf-8',
    flag: opts.flag
  }

  return fileOpts
}

module.exports = (file, options) => {
  const filename = path.resolve(file)
  const fileOptions = getFileOptions(options)
  const content = fs.readFileSync(filename, fileOptions)

  return content
}
