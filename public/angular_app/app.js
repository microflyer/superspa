var controllers = angular.module("controllers", []);
var services = angular.module("services", []);
var directives = angular.module("directives", []);

var superSpa = angular.module("superSpa", ["controllers", "services", "directives"]);

controllers.controller("mainCtrl", ["$scope", function($scope) {
	$scope.greetings = "hello, angular!";
}]);