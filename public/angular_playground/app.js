var demoApp = angular.module("demoApp", []);

demoApp.directive('superman', function() {
  return {
    restrict: 'A',
    link: function () {
      alert("I'm working stronger!")
    }
  }
});

demoApp.directive('flash', function () {
  return {
    restrict: "A",
    link: function () {
      alert("I'm working faster");
    }
  }
});
