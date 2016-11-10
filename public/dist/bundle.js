angular.module('realEstate', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      controller: 'homeFrontCtrl',
      url: '/'
    })
    .state('login-register', {
      templateUrl: './views/loginRegister.html',
      controller: 'loginRegisterCtrl'
    })
    .state('post-testimonial', {
      templateUrl: './views/postTestimonial.html',
      controller: 'postTestFrontCtrl',
      resolve: {
        user: ["authService", "$state", function(authService, $state) {
          return authService.getCurrentUser()
            .then(function(response) {
              if (!response.data)
                $state.go('login-register');
              return response.data;
            })
            .catch(function(err) {
              $state.go('login-register');
            });
        }]
      }
    })




}])

angular.module('realEstate').controller('contactFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])

angular.module('realEstate').controller('homeFrontCtrl', ["$scope", function($scope) {

}])

angular.module('realEstate').controller('loginRegisterCtrl', ["$scope", "mainService", "authService", "$state", function($scope, mainService, authService, $state) {

  $scope.login = function(user) {
  authService.login(user).then(function(response) {
    if (!response.data) {
      alert('User does not exist');
      $scope.user.password = '';
    } else {
      // console.log(response);
        $state.go('home');
    }
  }).catch(function(err) {
    alert('Unable to login');
  });
};

$scope.register = function(user) {
  authService.registerUser(user).then(function(response) {
    if (!response.data) {
      alert('Unable to create user');
    } else {
      alert('User Created');
      $scope.newUser = {};
    }
  }).catch(function(err) {
    alert('Unable to create user');
  });
};

}])

angular.module('realEstate').controller('mainCtrl', ["$scope", function($scope) {
  $(document).ready(function() {
      // Select link by id and add click event
      $('#welcome-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#welcome-view").offset().top }, // Tell it to scroll the top #bottom
          2700 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#testimonials-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#testimonials-view").offset().top }, // Tell it toscroll to the top #bottom
          2700 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#newsletter-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#newsletter-view").offset().top }, // Tell it tscroll to the top #bottom
          2700 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#contact-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#contact-view").offset().top }, // Tell it scroll to the top #bottom
          2700 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#welcome-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#testimonials-view").offset().top }, // Tell it toscroll to the top #bottom
          2700 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#testimonials-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#newsletter-view").offset().top }, // Tell it tscroll to the top #bottom
          2700 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#newsletter-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#contact-view").offset().top }, // Tell it scroll to the top #bottom
          2700 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
    })
}])

angular.module('realEstate').controller('newsFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])

angular.module('realEstate').controller('postTestFrontCtrl', ["$scope", "mainService", function($scope, mainService) {
console.log('hey');
  $scope.postTestimonial = function(testimonial, firstname, lastname) {
    mainService.postTestimonial(testimonial, firstname, lastname).then(function(response) {
      console.log(response);
    })
  }
}])

angular.module('realEstate').controller('testFrontCtrl', ["$scope", "mainService", function($scope, mainService) {
    mainService.getTestimonials().then(function(response) {
      console.log("testimonial response: ", response.data);
      $scope.testimonials = response.data;
    });
}])

angular.module('realEstate').controller('welcomeFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])

angular.module('realEstate').directive('contact', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/contact.html'
  }

})

angular.module('realEstate').directive('home', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/home.html'
  }
  
})

angular.module('realEstate').directive('navBar', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/nav-bar.html'
  }
})

angular.module('realEstate').directive('newsletter', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/newsletter.html'
  }
})

angular.module('realEstate').directive('testimonials', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/testimonials.html',
    controller: "testFrontCtrl"
  }

})

angular.module('realEstate').directive('welcome', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/welcome.html'
  }
})

angular.module('realEstate').service('authService', ["$http", function($http) {

  this.login = function(user) {
  return $http({
    method: 'post',
    url: '/login',
    data: user
  }).then(function(response) {
    return response;
  });
};

this.logout = function() {
  return $http({
    method: 'get',
    url: '/logout'
  }).then(function(response) {
    return response;
  });
};

this.getCurrentUser = function() {
  return $http({
    method: 'GET',
    url: '/me'
  }).then(function(response) {
    return response;
  });
};

this.registerUser = function(user) {
  return $http({
    method: 'POST',
    url: '/register',
    data: user
  }).then(function(response) {
    return response;
  });
};

}])

angular.module('realEstate').service('mainService', ["$http", function($http) {

  this.getTestimonial = function() {
    return $http ({
      method: 'GET',
      url: '/testimonial'
    });
  }
  this.getTestimonials = function() {
    return $http ({
      method: 'GET',
      url: '/testimonials',
    });
  }

  this.postTestimonial = function(testimonial, firstname, lastname) {
    return $http ({
      method: 'POST',
      url: '/testimonial/post',
      data: {
        testimonialcontent: testimonial,
        testfirstname: firstname,
        testlastname: lastname
      }
    });
  }

}]);
