'use strict';

var exec = require('child_process').exec;
var pify = require('pify');

var f = function (cb) {
	exec('ps -e | grep -E \'unity-panel\'', function (error, stdout) {
		if (error) {
			cb(null, false);
		}
		if ((stdout).length > 0) {
			cb(null, true);
		}
		cb(null, false);
	});
};

module.exports = pify(f);
