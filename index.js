'use strict';
var got = require('got');
var endpoint = 'https://bower.herokuapp.com/packages/';

module.exports = function (name, cb) {
	got.head(endpoint + encodeURIComponent(name.toLowerCase()), function (err, data) {
		if (err && err.code === 404) {
			cb(null, true);
			return;
		}

		if (err) {
			cb(err);
			return;
		}

		cb(null, false);
	});
};
