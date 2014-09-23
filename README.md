## Koa-Ng-Boilerplate
### Usage Documentation

#### Purpose
The purpose of this project is to make it easier for an engineer to get
up-and-running with a koa (node.js >= v0.11.9) server app paired with a single-page
client angular.js app.  Many of our new admin tools are built in this fashion,
and share many of the same requirements (such as a common logger, error handler,
configuration, and session management), so it makes sense to have a quick
spin-up process to take care of most of the plumbing for you, so you can
spend more time coding your actual app.

#### Usage
If you install this globally, you will only have to install it once.  The command
to install is:

```
    npm install -g git+ssh://git@stash.redventures.net/srch/koa-ng-boilerplate.git
```

Now, assuming your global node_modules is in your $PATH, you should be able to use the
command "koa-ng-boilerplate".  There's only one parameter: "--name".  This parameter
will be the name of the application you want to create.  It will be automatically
inserted into the package.json, bower.json, and various places in the angular
code.

```
    koa-ng-boilerplate --name=myapp
```

That's pretty much it.  We plan on updating this repo as new versions of koa and
angular.js are released, and our release tags should mirror the versioning scheme of
koa/angular (i.e. a minor version bump in either would cause a minor version bump
in koa-ng-boilerplate).

#### Contents
The koa app ships with the common dependencies needed for a typical app,
such as the session middleware, body-parser, compression, envcfg, connect-redis,
passport, connect-timeout, bunyan, cookie-parser, and redis.  It also has
dev dependencies for the most common grunt modules, as well as mocha/should
for testing purposes, and jshint for coding standards.  The grunt process
is pretty standard, and should work without modification.

The angular app ships with angular, angular-resource, angular-route, underscore,
jquery, angular-ui-bootstrap, and angular-flare.  There is a single services, called
'auth' created, that assumes the existence of a '/login' route on the server that
accepts a POST request containing a body consisting of 'username' and 'password'.
The app module contains a pre-fabbed $http interceptor that looks for 401, 403, and
500 responses, and responds accordingly.  It also has a single route, '/login',
that exists as a skeleton module with a bootstrap-themed username/password form.
The index.html page is a skeleton as well.

We've tried to follow, as close as possible, to [felixge's node style guide](https://github.com/felixge/node-style-guide)
for the server app, and we have followed relatively closely to
[Todd Motto's angular style guide](http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/)
with a few modifications for the angular code style.

#### Contributing
If you want to contribute, please fork the repo, create a feature or bugfix branch,
commit your change, and submit a pull request with an appropriate description.
