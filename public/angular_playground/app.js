var demoApp = angular.module("demoApp", []);

demoApp.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.message = "Hello, Angular!";

  setTimeout(function () {
      $scope.message = "Angular is awesome!"
  }, 3000);

}]);
