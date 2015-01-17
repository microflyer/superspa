var demoApp = angular.module("demoApp", []);

demoApp.directive('panel', function () {
  return {
    restrict: "E",
    transclude: true,
    replace: true,
    template: '<div class="alert alert-info ng-transclude" role="alert"></div>',

    link: function (scope, element) {

    }
  };
});
