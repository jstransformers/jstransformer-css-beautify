'use strict';

var beautify = require('js-beautify').css_beautify;

exports.name = 'css-beautify';
exports.outputFormat = 'css';

exports.render = beautify;
