var demoApp = angular.module("demoApp", []);

demoApp.directive('superhero', function () {
  return {
    restrict: "E",

    controller: function ($scope) {
      $scope.abilities = [];

      this.addStrength = function () {
        $scope.abilities.push("strength");
      };

      this.addSpeed = function () {
        $scope.abilities.push("speed");
      };

      this.addFlight = function () {
        $scope.abilities.push("flight");
      }
    },

    link: function (scope, element) {
      element.bind("mouseenter", function () {
        console.log(scope.abilities);
      });
    }
  };
});

demoApp.directive("strength", function () {
  return {
    require: "superhero",
    link: function (scope, element, attrs, superheroCtrl) {
      superheroCtrl.addStrength();
    }
  };
});

demoApp.directive("speed", function () {
  return {
    require: "superhero",
    link: function (scope, element, attrs, superheroCtrl) {
      superheroCtrl.addSpeed();
    }
  };
});

demoApp.directive("flight", function () {
  return {
    require: "superhero",
    link: function (scope, element, attrs, superheroCtrl) {
      superheroCtrl.addFlight();
    }
  };
});

// the next step is to introduce isolate scope a little.
