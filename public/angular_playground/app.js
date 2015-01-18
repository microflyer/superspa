var demoApp = angular.module("demoApp", []);

demoApp.controller('MainCtrl', function ($scope) {
  $scope.callHome = function (message) {
    alert(message);
  }
})

demoApp.directive('phone', function () {
  return {
    scope: {
      dial:"&"
    },
    template: '<input type="text" ng-model="value" class="form-control"><br>' +
              '<div class="btn btn-primary" ng-click="dial({message:value})">Call Home</div>'
  }
})
