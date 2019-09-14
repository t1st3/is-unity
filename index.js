'use strict';

const {exec} = require('child_process');

module.exports = new Promise((resolve, reject) => {
	exec('ps -e | grep -E \'unity-panel\'', (error, stdout) => {
		if (error) {
			if (error.killed === false && error.signal === null) {
				resolve(false);
			}

			reject(error);
		}

		if ((stdout).length > 0) {
			resolve(true);
		}

		resolve(false);
	});
});
