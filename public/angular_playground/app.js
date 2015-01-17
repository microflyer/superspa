var demoApp = angular.module("demoApp", []);

demoApp.directive('enter', function() {
  return {
    restrict: 'A',
    link: function (scope, element) {
      element.bind("mouseenter", function () {
        element.addClass("bg-primary");
      });
    }
  };
});

demoApp.directive('leave', function () {
  return {
    link: function (scope, element) {
      element.bind('mouseleave', function () {
        element.removeClass("bg-primary");
      });
    }
  };
});

// the next step would be using the attrs param to implement the same behaviors.
