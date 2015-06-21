#!/usr/bin/env node
'use strict';
var logSymbols = require('log-symbols');
var meow = require('meow');
var bowerName = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ bower-name <name>',
		'',
		'Examples',
		'  $ bower-name multiline',
		'  ' + logSymbols.error + ' Unavailable',
		'  $ bower-name unicorn-cake',
		'  ' + logSymbols.success + ' Available',
		'',
		'Exits with code 0 when the name is available or 2 when taken'
	]
});

if (cli.input.length === 0) {
	console.error('Package name required');
	process.exit(1);
}

bowerName(cli.input[0], function (err, available) {
	if (err) {
		console.error(err);
		process.exit(1);
	}

	console.log(available ? logSymbols.success + ' Available' : logSymbols.error + ' Unavailable');
	process.exit(available ? 0 : 2);
});
