var demoApp = angular.module("demoApp", []);

demoApp.controller('MainCtrl', function ($scope) {

  $scope.message = "Hello, AngularJS!";

  setTimeout(function () {
      $scope.message = "AngularJS is Awesome!";
  }, 3000);
});
