
angular.module('awesomeNews').config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/angular_app/views/home.html',
      controller: 'mainCtrl',
      resolve: { postPromise: ['posts', function (posts) {
        return posts.getAll();
      }]}
    })
    .when('/posts/:id', {
      templateUrl: '/angular_app/views/posts.html',
      controller: 'postsCtrl',
      resolve: { post: ['$routeParams', 'posts', function ($routeParams, posts) {
        return posts.get($routeParams.id);
      }]}
    })
    .otherwise({redirectTo: '/home'});
}]);
