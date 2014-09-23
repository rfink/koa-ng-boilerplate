'use strict';

let koa = require('koa');
let bodyParser = require('koa-body-parser');
let compress = require('koa-compress');
let methodOverride = require('koa-methodoverride');
let mount = require('koa-mount');
let session = require('koa-session-redis');
let serve = require('koa-static');
let timeout = require('koa-timeout');
let http = require('http');
//let passport = require('./common/passport');
let config = require('./config');
let app = module.exports = koa();

app.on('error', require('./common/errorhandler'));
app.keys = [config.session.secret];
app.use(bodyParser());
app.use(methodOverride());
app.use(timeout(config.timeout));
app.use(compress());
app.use(session({
  store: {
    host: config.redis.host,
    port: config.redis.port,
    ttl: config.session.ttl
  },
  secret: config.session.secret,
  name: config.session.name,
  key: config.session.name,
  cookie: config.session.cookie
}));
//app.use(passport.initialize());
//app.use(passport.session());

app.use(serve(__dirname + '/../dist'));

if (!module.parent) {
  http.createServer(app.callback()).listen(config.port);
}
