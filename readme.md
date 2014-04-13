# bower-name [![Build Status](https://travis-ci.org/sindresorhus/bower-name.svg?branch=master)](https://travis-ci.org/sindresorhus/bower-name)

> Check whether a package name is available on bower


## Install

```bash
$ npm install --save bower-name
```


## Usage

```js
var bowerName = require('bower-name');

bowerName('jquery', function (err, available) {
	console.log(available);
	//=> false
});
```


## CLI

You can also use it as a CLI app by installing it globally:

```bash
$ npm install --global bower-name
```

#### Usage

```bash
$ bower-name --help

Usage
  $ bower-name <name>

Exits with code 0 when the name is available or 2 when taken
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
