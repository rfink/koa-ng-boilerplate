
function appConfig($routeProvider, $httpProvider) {
  /**
   * Authentication interceptor for $http calls
   */
  function authInterceptor($q, $location, AuthService, flare) {
    /**
     * Success handler
     */
    function onSuccess(response) {
      return response;
    }

    /**
     * Error handler
     */
    function onError(response) {
      var currentPath = $location.path();
      // Response is unauthorized but we exclude /login so we don't get into
      //   an infinite redirect
      if (response.status === 401 && response.config.url !== '/login') {
        AuthService.user = null;
        $location.search('redirectUrl', currentPath)
          .path('/login');
      // Access denied
      } else if (response.status === 403) {
        flare.error('Access denied', 10000);
      // Server error
      } else if (response.status === 500) {
        flare.error('Internal server error', 10000);
      }
      return $q.reject(response);
    }

    return function resolver(promise) {
      return promise.then(onSuccess, onError);
    };
  }

  var interceptor = [
    '$q',
    '$location',
    'AuthService',
    'flare',
    authInterceptor
  ];

  // Add the auth interceptor onto the response interceptors stack
  $httpProvider.responseInterceptors.push(interceptor);

  return $routeProvider
    .when('/login', {
      controller: 'LoginController',
      templateUrl: 'app/login/index.tpl.html'
    })
    .otherwise({ redirectTo: '/' });
}

angular.module('{{app}}', [
  'ngRoute',
  'ngResource',
  'templates-app',
  'common.services',
  'angular-flare'
]).config([
  '$routeProvider',
  '$httpProvider',
  appConfig
]);
