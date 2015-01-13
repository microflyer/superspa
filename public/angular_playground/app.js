var demoApp = angular.module("demoApp", ['ngRoute']);

demoApp.config(function($routeProvider){
	$routeProvider
						.when('/', {
							templateUrl: 'angular_playground/views/index.html',
							controller: 'MainCtrl',
              resolve: {
                loadData: mainCtrl.loadData,
                prepData: mainCtrl.prepData
              }
						})
});

var mainCtrl = demoApp.controller('MainCtrl', ['$scope', '$route', 'loadData', 'prepData',
                                  function ($scope, $route, loadData, prepData) {
	$scope.model = {
    message: "Hello, Angular Route!"
	};

  console.log($route);
  console.log(loadData);
  console.log(prepData);
}]);

mainCtrl.loadData = function ($q, $timeout) {
  var defered = $q.defer();

  $timeout(function () {
    defered.resolve("load data from service");
  }, 3000);

  return defered.promise;
}

mainCtrl.prepData = function ($q, $timeout) {
  var defered = $q.defer();

  $timeout(function () {
    defered.resolve("prep data from service");
  }, 3000);

  return defered.promise;
}
