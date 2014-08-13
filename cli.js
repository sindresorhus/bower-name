#!/usr/bin/env node
'use strict';
var logSymbols = require('log-symbols');
var pkg = require('./package.json');
var bowerName = require('./');
var argv = process.argv.slice(2);
var input = argv[0];

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    bower-name <name>',
		'',
		'  Exits with code 0 when the name is available or 2 when taken'
	].join('\n'));
}

if (!input || argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

bowerName(input, function (err, available) {
	if (err) {
		console.error(err);
		process.exit(1);
		return;
	}

	console.log(available ? logSymbols.success + ' Available' : logSymbols.error + ' Unavailable');
	process.exit(available ? 0 : 2);
});
