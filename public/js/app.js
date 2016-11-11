angular.module('realEstate', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      controller: 'homeFrontCtrl',
      url: '/'
      // resolve: {
      //   newsletters: function(mainService, $state) {
      //     return mainService.getNewsletters().then(function(response) {
      //       console.log("newsletter response: ", response.data);
      //       return response.data;
      //     })
      //   }
      // }
    })
    .state('login-register', {
      templateUrl: './views/loginRegister.html',
      controller: 'loginRegisterCtrl'
    })
    .state('post-testimonial', {
      templateUrl: './views/postTestimonial.html',
      controller: 'postTestimonialCtrl',
      resolve: {
        user: function(authService, $state) {
          return authService.getCurrentUser()
            .then(function(response) {
              if (!response.data)
                $state.go('login-register');
              return response.data;
            })
            .catch(function(err) {
              $state.go('login-register');
            });
        }
      }
    })
    .state('post-newsletter', {
      templateUrl: './views/postNewsletter.html',
      controller: 'postNewsletterCtrl',
      url: '/newsletter/post'
    })




})
