var demoApp = angular.module("demoApp", []);

demoApp.controller('MainCtrl', function ($scope) {

  $scope.messages = [];

  $scope.$watch('user.password', function (newVal, oldVal) {

    $scope.messages.length = 0;

    if (angular.isDefined(newVal)) {
      if (newVal.length < 5) {
        $scope.messages.push("Password must have at least 4 characters");
      }
    }
  })
});
