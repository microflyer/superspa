var demoApp = angular.module("demoApp", []);

demoApp.controller("MainCtrl", function ($scope) {
  $scope.loadMoreTweets = function () {
    alert('Loading tweets...');
  };

  $scope.deleteTweets = function () {
    alert('Deleting tweets...');
  };
});

demoApp.directive("enter", function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.bind('mouseenter', function () {
        scope.$apply(attrs.enter);
      });
    }
  };
});
