var demoApp = angular.module("demoApp", ['ngRoute']);

demoApp.config(function($routeProvider){
	$routeProvider
						.when('/', {
							templateUrl: 'angular_playground/views/index.html',
							controller: 'MainCtrl'
						})
            .when('/computer/:brand/:model', {
              redirectTo: function (routeParams, path, search) {
                console.log(routeParams);
                console.log(path);
                console.log(search);
                return '/' + routeParams.model;
              }
            })
            .when('/iMac', {
              template: 'iMac with Retina Screen!'
            })
            .otherwise({
              redirectTo: '/'
            });
});

demoApp.controller('MainCtrl', ['$scope', function ($scope) {
	$scope.model = {
    message: "Hello, Angular Route!"
	};
}]);
