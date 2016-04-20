'use strict';
var _ = require('lodash');
var gutil = require('gulp-util');
var through = require('through2');
var democase = require('democase');

module.exports = function (opts) {
	opts = opts || {};

	return through.obj(function (file, enc, cb) {
		if (file.isDirectory()) {
			democase.load(file.path).then(function (demoSet) {
				demoSet.serve(opts);
			}).catch(cb);
		} else {
			cb(new gutil.PluginError('gulp-democase', 'Demo source should be a directory'));
			return;
		}
	});
};
