var demoApp = angular.module("demoApp", ['ngRoute']);

demoApp.config(function($routeProvider){
	$routeProvider
						.when('/map/:country/:state/:city', {
							templateUrl: 'angular_playground/views/index.html',
							controller: 'MainCtrl'
						});
});

demoApp.controller('MainCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
	$scope.model = {
		country: $routeParams.country,
		state: $routeParams.state,
		city: $routeParams.city
	};
}]);
