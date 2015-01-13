var demoApp = angular.module("demoApp", ['ngRoute']);

demoApp.config(function($routeProvider){
	$routeProvider
						.when('/', {
							templateUrl: 'angular_playground/views/index.html',
							controller: 'MainCtrl'
						})
						.when('/pizza', {
							template: 'Yum'
						})
						.otherwise({template: "This doesn't exist"});
});

demoApp.controller('MainCtrl', ['$scope', '$route', function ($scope, $route) {
	$scope.model = {message: "Hello, Angular Route!"};
}]);
