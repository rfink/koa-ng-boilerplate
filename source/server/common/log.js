'use strict';

/* ~ Deps ~ */

let bunyan = require('bunyan');
let pkg = require('../../package.json');

module.exports = bunyan.createLogger({
  name: pkg.name,
  version: pkg.version,
  level: process.env.LOG_LEVEL || 'error',
  serializers: bunyan.stdSerializers
});
