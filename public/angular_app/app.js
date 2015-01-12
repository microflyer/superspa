angular.module('flapperNews', ['ui.router']);

angular.module('flapperNews').config(
	['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'mainCtrl',
			// need more knowledge to understand resolve here
			resolve: { postPromise: ['posts', function (posts) {
				return posts.getAll();
			}]}
		})
		.state('posts', {
			url: '/posts/{id}',
			templateUrl: '/posts.html',
			controller: 'postsCtrl',
			resolve: { post: ['$stateParams', 'posts', function ($stateParams, posts) {
				return posts.get($stateParams.id);
			}]}
		});

		$urlRouterProvider.otherwise('home');
}]);

angular.module('flapperNews').controller('mainCtrl', ['$scope', 'posts', function ($scope, posts) {
	$scope.posts = posts.posts;

	$scope.addPost = function () {
		if (!$scope.title || $scope.title === '') {
			return;
		}

		posts.create({title: $scope.title, link: $scope.link})

		$scope.title = '';
		$scope.link = '';
	};

	$scope.incrementUpvotes = function (post) {
		posts.upvote(post);
	};

}]);

angular.module('flapperNews').controller('postsCtrl', ['$scope', '$stateParams', 'posts', 'post', function ($scope, $stateParams, posts, post) {
	// why can we inject post here? is it because we have it in the resolve object of state config?
	$scope.post = post;
	$scope.addComment = function () {
		if ($scope.body === '') {
			return;
		}

		posts.addComment(post._id, {
			body: $scope.body,
			author: 'user',
		}).success(function (comment) {
			$scope.post.comments.push(comment);
		});

		$scope.body = '';
	};

	$scope.incrementUpvotes = function (comment) {
		posts.upvoteComment(post, comment);
	}
}]);

angular.module('flapperNews').factory('posts', ['$http', function ($http) {
	var o = { posts: [] };

	o.getAll = function () {
		return $http.get('/posts').success(function (data) {
			angular.copy(data, o.posts);
		});
	};

	o.create = function (post) {
		return $http.post('/posts', post).success(function (data) {
			o.posts.push(data);
		});
	};

	o.upvote = function (post) {
		return $http.put('/posts/' + post._id + '/upvote').success(function (data) {
			post.upvotes += 1;
			//post.upvotes = data.upvotes
		});
	};

	o.get = function (id) {
		// why use then here? res.data?
		return $http.get('/posts/' + id).then(function (res) {
			return res.data;
		});
	};

	o.addComment = function (id, comment) {
		return $http.post('/posts/' + id + '/comments', comment);
	};

	o.upvoteComment = function (post, comment) {
		return $http.put('/posts/' + post._id + '/comments/' + comment._id + '/upvote').success(function (data) {
			comment.upvotes += 1;
		});
	};

	return o;
}]);
