angular.module('flapperNews', ['ui.router']);

angular.module('flapperNews').config(
	['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'mainCtrl'
		})
		.state('posts', {
			url: '/posts/{id}',
			templateUrl: '/posts.html',
			controller: 'postsCtrl'
		});

		$urlRouterProvider.otherwise('home');
}]);

angular.module('flapperNews').controller('mainCtrl', ['$scope', 'posts', function ($scope, posts) {
	$scope.posts = posts.posts;

	$scope.addPost = function () {
		if (!$scope.title || $scope.title === '') {
			return;
		}

		$scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0});
		$scope.title = '';
		$scope.link = '';
	};

	$scope.incrementUpvotes = function (post) {
		post.upvotes += 1;
	};

	$scope.posts.push({
		title: $scope.title,
		link: $scope.link,
		upvotes: 0,
		comments: [
			{author: 'Joe', body: 'Cool post!', upvotes: 0},
			{author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
	]});


}]);

angular.module('flapperNews').controller('postsCtrl', ['$scope', '$stateParams', 'posts', function ($scope, $stateParams, posts) {
	$scope.post = posts.posts[$stateParams.id];
	$scope.addComment = function () {
		if ($scope.body === '') {
			return;
		}

		$scope.post.comments.push({
			body: $scope.body,
			author: 'user',
			upvotes: 0
		});

		$scope.body = '';
	};
}]);

angular.module('flapperNews').factory('posts', [function () {
	var o = {posts: []};
	return o;
}]);
