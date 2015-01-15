
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
      resolve: { post: ['posts', '$route', function (posts, $route) {
        return posts.get($route.current.params.id);
      }]}
    })
    .otherwise({redirectTo: '/home'});
}]);
