'use strict';

let log = require('./log');
let env = process.env.NODE_ENV || 'development';

/**
 * Development error handler, send the error stack along as well
 */
function devErrorHandler(err, req, res, next) {
  log.error(err);
  return res.send(500, err.stack);
}

/**
 * Production error handler, only send the 500
 */
function productionErrorHandler(err, req, res, next) {
  log.error(err);
  return res.send(500, 'Internal server error');
}

if (env === 'production') {
  module.exports = productionErrorHandler;
} else {
  module.exports = devErrorHandler;
}
