var demoApp = angular.module("demoApp", ['ngRoute']);

demoApp.config(function($routeProvider){
	$routeProvider
						.when('/', {
							templateUrl: 'angular_playground/views/index.html',
							controller: 'MainCtrl',
              resolve: {username: function ($q, $timeout) {
                var defered = $q.defer();

                $timeout(function () {
                  defered.resolve("Danny Jia");
                }, 3000);

                /*
                return defered.promise.then(function (data) {
                  return "Hello, " + data;
                });
                */

                return defered.promise;
              }}
						})
});

demoApp.controller('MainCtrl', ['$scope', 'username', function ($scope, username) {
	$scope.model = {
    message: username
	};
}]);
