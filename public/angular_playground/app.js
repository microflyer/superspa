var demoApp = angular.module("demoApp", []);

demoApp.controller('MainCtrl', function ($scope, $q, $http) {

	$scope.members = [];

	$scope.getMemberList = function() {
		$http.get('/members')
		.success(function (data, status, header, config) {
			$scope.members = data;
			console.log(data);
			console.log(status);
			console.log(header);
			console.log(config);
		})
		.error(
			function (data, status, header, config) {
				console.log(data);
				console.log(status);
				console.log(header);
				console.log(config);
			}
		);
	};

	$scope.createMember = function() {
		$http.post('/members', {firstName: 'Guowei', lastName:'Li', department: 'ADM'})
		.success(function (data, status, header, config) {
			$scope.members.push(data);
			console.log(data);
			console.log(status);
		})
		.error(
			function (data, status, header, config) {
				console.log(data);
				console.log(status);
			}
		);
	};

	$scope.updateMember = function() {

		var lastAdded = $scope.members[$scope.members.length - 1];
		lastAdded.firstName = "Lee";

		$http.put('/members')
		.success(function (data, status, header, config) {
			lastAdded = data;
			console.log(data);
			console.log(status);
		})
		.error(
			function (data, status, header, config) {
				console.log(data);
				console.log(status);

			}
		);
	};

	$scope.deleteMember = function () {
		var lastAdded = $scope.members[$scope.members.length - 1];
		lastAdded.firstName = "Lee";

		$http.delete('/members')
		.success(function (data, status, header, config) {

			$scope.members.splice($scope.members.length - 1, 1);

			console.log(data);
			console.log(status);
		})
		.error(
			function (data, status, header, config) {
				console.log(data);
				console.log(status);

			}
		);
	}

});
