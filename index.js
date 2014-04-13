'use strict';
var got = require('got');
var endpoint = 'https://bower.herokuapp.com/packages/';

module.exports = function (name, cb) {
	got(endpoint + encodeURIComponent(name), {method: 'HEAD'}, function (err, data) {
		if (err === 404) {
			return cb(null, true);
		}

		if (err) {
			return cb(err);
		}

		cb(null, false);
	});
};
