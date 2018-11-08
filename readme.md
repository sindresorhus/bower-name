# Deprecated

Deprecated as Bower is practically unmaintained. Check out [`npm-name`](https://github.com/sindresorhus/npm-name) instead.

---

# bower-name [![Build Status](https://travis-ci.org/sindresorhus/bower-name.svg?branch=master)](https://travis-ci.org/sindresorhus/bower-name)

> Check whether a package name is available on bower


## Install

```
$ npm install --save bower-name
```


## Usage

```js
const bowerName = require('bower-name');

bowerName('jquery').then(available => {
	console.log(available);
	//=> false
});
```


## Related

- [bower-name-cli](https://github.com/sindresorhus/bower-name-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
