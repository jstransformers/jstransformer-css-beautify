# jstransformer-css-beautify

[JS Beautifier CSS](https://github.com/beautify-web/js-beautify) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-css-beautify/master.svg)](https://travis-ci.org/jstransformers/jstransformer-css-beautify)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-css-beautify/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-css-beautify?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-css-beautify/master.svg)](http://david-dm.org/jstransformers/jstransformer-css-beautify)
[![NPM version](https://img.shields.io/npm/v/jstransformer-css-beautify.svg)](https://www.npmjs.org/package/jstransformer-css-beautify)

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-foo/master.svg)](https://travis-ci.org/jstransformers/jstransformer-foo)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-foo/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-foo)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-foo/master.svg)](http://david-dm.org/jstransformers/jstransformer-foo)
[![NPM version](https://img.shields.io/npm/v/jstransformer-foo.svg)](https://www.npmjs.org/package/jstransformer-foo)
>>>>>>> Use Codecov instead of Coveralls

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
