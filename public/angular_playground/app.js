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

demoApp.controller('MainCtrl', ['$scope', '$http', 'authService', function ($scope, $http, authService) {

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

  $scope.authorizeUser = function () {
    authService.authorize("username1", "password1");
  };
}]);

demoApp.factory('authService', function ($q, $http) {
  return {
    isAuthorized: false,
    authToken: "",
    authorize: function (username, password) {

      var deferred = $q.defer();

      $http.post('/authorize', {username: username, password: password}).success(function (data) {
        this.isAuthorized = true;
        this.authToken = data.authorizaionToken;
        deferred.resolve();
      });

      return deferred.promise;
    }
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
