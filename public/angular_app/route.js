angular.module('awesomeNews').config(
  ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/angular_app/views/home.html',
      controller: 'mainCtrl',
      resolve: { postPromise: ['posts', function (posts) {
        return posts.getAll();
      }]}
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/angular_app/views/posts.html',
      controller: 'postsCtrl',
      resolve: { post: ['$stateParams', 'posts', function ($stateParams, posts) {
        return posts.get($stateParams.id);
      }]}
    });

    $urlRouterProvider.otherwise('home');
  }]);
