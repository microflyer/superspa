var demoApp = angular.module("demoApp", ['ngRoute']);

demoApp.config(function($routeProvider){
	$routeProvider
						.when('/', {
							templateUrl: 'angular_playground/views/index.html',
							controller: 'MainCtrl'
						})
						.when('/pizza', {
							template: '<h1>Pizza Page: {{pizzaName}}</h1><button class="btn btn-primary" ng-click="changeRoute()">Go Back</button>',
							controller: 'PizzaCtrl',
							resolve: {
								pizzaName: function ($q) {
									var defered = $q.defer();

									//defered.reject("error occured fetching pizza name!");

									defered.resolve();

									return defered.promise;
								}
							}
						});
});

demoApp.controller('MainCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
	$scope.model = {
    message: "Hello, Angular Route!"
	};

	$scope.changeRoute = function () {
		$location.path('/pizza');
	};

	$rootScope.$on('$routeChangeStart', function (event, current, previous) {
		console.log("route change starts...");
		console.log(event);
		console.log(current);
		console.log(previous);
	});

	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
		console.log("route change succeeded...");
		console.log(event);
		console.log(current);
		console.log(previous);
	})

	$rootScope.$on('$routeChangeError', function(event, current, previous, rejectMsg) {
		console.log("route change error...")
		console.log(rejectMsg);
	});

}]);

demoApp.controller('PizzaCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {

	$scope.changeRoute = function () {
		$location.path('/');
	};

}]);
