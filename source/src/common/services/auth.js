
/**
 * Service handling authorization for the app
 */
function AuthService($http) {
  this.$http = $http;
  this.user = {};
}

/**
 * Perform our login
 */
AuthService.prototype.login = function login(username, password) {
  var self = this;

  return this.$http
    .post('/login', { username: username, password: password })
    .then(function onSuccess(res) {
      self.user = res;
    });
};

/**
 * Check if user is currently logged in
 */
AuthService.prototype.isLoggedIn = function isLoggedIn() {
  return this.user && this.user.id;
};

/**
 * Logout from the app
 */
AuthService.prototype.logout = function logout() {
  var self = this;

  return this.$http
    .get('/logout')
    .then(function onSuccess(res) {
      self.user = {};
    });
};

angular.module('common.services')
  .service('AuthService', [
    '$http',
    AuthService
  ]);
