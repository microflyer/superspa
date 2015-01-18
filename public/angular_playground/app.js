var demoApp = angular.module("demoApp", []);

demoApp.controller('MainCtrl', function ($scope) {
  $scope.ctrlFlavor = "blackberry"
})

demoApp.directive('drink', function () {
  return {
    scope: {
      flavor:"="
    },
    template: '<input class="form-control" type="text" ng-model="flavor">'
  }
})
