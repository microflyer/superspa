// AUTH_TOKEN is set from server after login.
//var AUTH_TOKEN = "Ajut9kGNByipqwABZ";
var AUTH_TOKEN = "";

var demoApp = angular.module("demoApp", []);

demoApp.config(function ($httpProvider) {

  console.log($httpProvider);

  angular.forEach($httpProvider.defaults.transformRequest, function (value, index) {
    console.log(value.toString());
  });

  angular.forEach($httpProvider.defaults.transformResponse, function (value, index) {
    console.log(value.toString());
  });

  $httpProvider.interceptors.push("authInterceptor");
});

demoApp.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

  $scope.getPeople = function () {
    $http.get('/people').success(
      function (data) {
        console.log(data)
      }
    ).error(function (data, status) {
      console.log(data);
      console.log(status);
    });
  };
}]);

demoApp.factory('authService', function () {
  return {
    isAuthorized: AUTH_TOKEN !== "",
    authToken: AUTH_TOKEN,
  };
});

demoApp.factory('authInterceptor', function(authService) {
  return {
    request: function (config) {
      if (authService.isAuthorized) {
        config.headers['authorizaion-token'] = authService.authToken;
      }
      return config;
    }
  };
});
