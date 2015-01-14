var demoApp = angular.module("demoApp", []);

demoApp.controller('MainCtrl', function ($scope, $q, $timeout) {

	$scope.data = {};
	$scope.error = "";

	var getPromise = function () {
		var defered = $q.defer();

		$timeout(function () {
			defered.resolve("Macbook Pro with retina");
		}, 3000);

		/*
		$timeout(function () {
			defered.reject("Failed to get product name from service");
		}, 2000);
		*/

		return defered.promise;

	};

	$scope.getProducts = function () {
		getPromise().then(
			function (data) {
				$scope.data.productName = data;
			},
			function (errorMsg) {
				$scope.error = errorMsg;
			});
	};




	var getA = function () {
		var defered = $q.defer();

		$timeout(function () {
			defered.resolve("A is returned.");
		}, 1500);

		return defered.promise;
	}

	var getBbyA = function (a) {
		var defered = $q.defer();

		$timeout(function () {
			defered.resolve("B is returned.");
		}, 1500);

		return defered.promise;
	}

	var getCbyB = function (b) {
		var defered = $q.defer();

		$timeout(function () {
			defered.resolve("C is returned.");
		}, 1500);

		return defered.promise;
	}

	var getDbyC = function (c) {
		var defered = $q.defer();

		$timeout(function () {
			defered.resolve("D is returned.");
		}, 1500);

		return defered.promise;
	}

	$scope.promiseChains = function () {

		$scope.data.messages = [];

		getA()
		.then(function (data) {
			$scope.data.messages.push(data + "Now getting B... ");
			return getBbyA(data);
		})
		.then(function (data) {
			$scope.data.messages.push(data + "Now getting C... ");
			return getCbyB(data);
		})
		.then(function (data) {
			$scope.data.messages.push(data + "Now getting D... ");
			return getDbyC(data);
		})
		.then(function (data) {
			$scope.data.messages.push(data);
		})
	}
});
