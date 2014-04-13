'use strict';
var assert = require('assert');
var bowerName = require('./index');

it('should return true when package name is available', function (cb) {
	bowerName('asdasfgrgafadsgaf', function (err, available) {
		assert(!err, err);
		assert(available);
		cb();
	});
});

it('should return false when package name is taken', function (cb) {
	bowerName('jquery', function (err, available) {
		assert(!err, err);
		assert(!available);
		cb();
	});
});
