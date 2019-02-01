global.path = require('path')

const $ = require('jquery')
global.$ = global.jQuery = $

const codeLoader = require('./helpers/codeLoader')
global.cRequire = codeLoader
global.getTestDOM = require('./helpers/testDom')
