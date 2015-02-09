var demoApp = angular.module("demoApp", []);

demoApp.controller('AccountCtrl', function ($scope) {


});

demoApp.directive('confirmPassword', function () {
  return {
    require: 'ngModel',
    scope: {
      password: "@"
    },
    link: function (scope, element, attrs, ctrl) {
      ctrl.$validators.confirmpassword = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          return true;
        }
        if (scope.password == modelValue) {
          return true;
        }

        return false;
      };
    }
  };
});


demoApp.directive('userNameChecker', function ($q, $timeout) {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ctrl) {
      var userNames = ['Danny', 'Neil', 'Jill', 'Peter'];
      ctrl.$asyncValidators.username = function (modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          return $q.when();
        }

        var deferred = $q.defer();
        $timeout(function () {
          if (userNames.indexOf(modelValue) === -1) {
            deferred.resolve();
          }
          else {
            deferred.reject();
          }
        }, 2000);

        return deferred.promise;
      };
    }
  };
});
