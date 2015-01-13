var demoApp = angular.module('demoApp', []);

demoApp.factory('data', [function () {
  return {
    message: ""
  };
}]);

demoApp.filter('reverse', function () {
  return function (text) {
    return text.split("").reverse().join("");
  };
});

demoApp.controller('FirstCtrl', ['$scope', 'data', function ($scope, data) {
  $scope.data = data;
}]);

demoApp.controller('SecondCtrl', ['$scope', 'data', function ($scope, data) {
  $scope.data = data;

  $scope.reverseString = function (text) {
    return text.split("").reverse().join("");
  };
}]);
