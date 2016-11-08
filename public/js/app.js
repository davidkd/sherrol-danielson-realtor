angular.module('realEstate', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      controller: 'homeFrontCtrl',
      url: '/'
    }),
  $stateProvider
    .state('post-testimonial', {
      templateUrl: './views/postTestimonial.html',
      controller: 'postTestFrontCtrl',
    })




})
