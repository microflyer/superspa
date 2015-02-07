var demoApp = angular.module("demoApp", []);

demoApp.controller('ParentCtrl', function ($scope) {
  $scope.messages = [];
  $scope.text = "";

  $scope.sendMessage = function (text) {
    $scope.$broadcast("messagefromparent", {source: "Parent", text: text});
    $scope.text = "";
  };

  $scope.$on("messagefromChild", function (event, message) {
    console.log(event);
    $scope.messages.push(message);
  })

});

demoApp.controller('ChildCtrl', function ($scope) {
  $scope.messages = [];
  $scope.text = "";

  $scope.sendMessage = function (text) {
    $scope.$emit("messagefromChild", {source: "Child", text: text});
    $scope.text = "";
  };

  $scope.$on("messagefromparent", function (event, message) {
    console.log(event);
    $scope.messages.push(message);
  })
});
