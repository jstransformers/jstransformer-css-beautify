'use strict'

const beautify = require('js-beautify').css_beautify

exports.name = 'css-beautify'
exports.outputFormat = 'css'

exports.render = beautify
