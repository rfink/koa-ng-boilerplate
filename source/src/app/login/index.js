
/**
 * Controller handling the application login process
 */
function LoginController($scope, $location, AuthService, flare) {
  $scope.login = function login() {
    return AuthService.login($scope.username, $scope.password)
      .success(function onSuccess() {
        flare.success('Successful login', 10000);
        return $location.path('/');
      })
      .error(function onError(err) {
        flare.error(err);
      });
  };
}

angular.module('{{app}}')
  .controller('LoginController', [
    '$scope',
    '$location',
    'AuthService',
    'flare',
    LoginController
  ]);
