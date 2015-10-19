'use strict';
var got = require('got');
var Promise = require('pinkie-promise');
var endpoint = 'https://bower.herokuapp.com/packages/';

module.exports = function (name) {
	if (!(typeof name === 'string' && name.length !== 0)) {
		return Promise.reject(new Error('Package name required'));
	}

	return got.head(endpoint + encodeURIComponent(name.toLowerCase())).then(function () {
		return false;
	}).catch(function (err) {
		if (err && err.statusCode === 404) {
			return true;
		}

		throw err;
	});
};
