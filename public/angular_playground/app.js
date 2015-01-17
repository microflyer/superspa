var demoApp = angular.module("demoApp", []);

demoApp.directive('superman', function () {
  return {
    restrict: 'E',
    template:'<h1>Here I am to save the day</h1>'
  }
})
