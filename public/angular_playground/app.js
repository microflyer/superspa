var demoApp = angular.module("demoApp", ['ngRoute']);

demoApp.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'angular_playground/views/index.html',
		controller: 'MainCtrl'
	});
});

demoApp.controller('MainCtrl', ['$scope', function ($scope) {
	$scope.model = {message: "Hello, Angular Route!"};
}]);
