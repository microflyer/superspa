var demoApp = angular.module("demoApp", []);

demoApp.directive('enter', function() {
  return {
    restrict: 'A',
    link: function (scope, element) {
      element.bind("mouseenter", function () {
        console.log("I'm inside of you!");
      });
    }
  };
});

demoApp.directive('leave', function () {
  return {
    link: function (scope, element) {
      element.bind('mouseleave', function () {
        console.log("I'm leavning on a jet plane");
      })
    }
  };
});
