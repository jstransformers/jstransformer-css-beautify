# jstransformer-css-beautify

[JS Beautifier CSS](https://github.com/beautify-web/js-beautify) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-css-beautify/master.svg)](https://travis-ci.org/jstransformers/jstransformer-css-beautify)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-css-beautify/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-css-beautify)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-css-beautify/master.svg)](http://david-dm.org/jstransformers/jstransformer-css-beautify)

[![NPM version](https://img.shields.io/npm/v/jstransformer-css-beautify.svg)](https://www.npmjs.org/package/jstransformer-css-beautify)

## Installation

    npm install jstransformer-css-beautify

## API

```js
var beautify = require('jstransformer')(require('jstransformer-css-beautify'))

beautify.render('<strong > Hello World! </strong  >').body
//=> '<strong>Hello World!</strong>'
```

## License

MIT
