angular.module('realEstate', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      controller: 'homeFrontCtrl',
      url: '/'
    }),
  $stateProvider
    .state('testimonials', {
      templateUrl: './views/testimonials.html',
      controller: 'testFrontCtrl',
    }),
  $stateProvider
    .state('newsletter', {
      templateUrl: './views/newsletter.html',
      controller: 'newsFrontCtrl',
    }),
  $stateProvider
    .state('contact', {
      templateUrl: './views/contact.html',
      controller: 'contactFrontCtrl',
    }),
  $stateProvider
    .state('postTestimonial', {
      templateUrl: './views/postTestimonial.html',
      controller: 'postTestFrontCtrl',
    })




}])

angular.module('realEstate').controller('contactFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])

angular.module('realEstate').controller('mainCtrl', ["$scope", function($scope) {
  $(document).ready(function() {
      // Select link by id and add click event
      $('#welcome-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#welcome-view").offset().top }, // Tell it to scroll the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#testimonials-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#testimonials-view").offset().top }, // Tell it toscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#newsletter-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#newsletter-view").offset().top }, // Tell it tscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#contact-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#contact-view").offset().top }, // Tell it scroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#welcome-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#testimonials-view").offset().top }, // Tell it toscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#testimonials-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#newsletter-view").offset().top }, // Tell it tscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#newsletter-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#contact-view").offset().top }, // Tell it scroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
    })
}])

angular.module('realEstate').controller('newsFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])

angular.module('realEstate').controller('postTestFrontCtrl', ["$scope", "mainService", function($scope, mainService) {
  
}])

angular.module('realEstate').controller('testFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

  // $scope.name = mainService.test;
}])

angular.module('realEstate').controller('welcomeFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])

angular.module('realEstate').directive('contact', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/contact.html'
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
    templateUrl: '../views/testimonials.html'
  }

})

angular.module('realEstate').directive('welcome', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/welcome.html'
  }
})

angular.module('realEstate').service('mainService', function() {

  this.test = 'david';
})

angular.module('realEstate', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      controller: 'homeFrontCtrl',
      url: '/'
    }),
  $stateProvider
    .state('postTestimonial', {
      templateUrl: './views/postTestimonial.html',
      controller: 'postTestFrontCtrl',
    })




}])

angular.module('realEstate').controller('contactFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])

angular.module('realEstate').controller('mainCtrl', ["$scope", function($scope) {
  $(document).ready(function() {
      // Select link by id and add click event
      $('#welcome-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#welcome-view").offset().top }, // Tell it to scroll the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#testimonials-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#testimonials-view").offset().top }, // Tell it toscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#newsletter-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#newsletter-view").offset().top }, // Tell it tscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#contact-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#contact-view").offset().top }, // Tell it scroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#welcome-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#testimonials-view").offset().top }, // Tell it toscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#testimonials-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#newsletter-view").offset().top }, // Tell it tscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#newsletter-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#contact-view").offset().top }, // Tell it scroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
    })
}])

angular.module('realEstate').controller('newsFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])

angular.module('realEstate').controller('postTestFrontCtrl', ["$scope", "mainService", function($scope, mainService) {
  
}])

angular.module('realEstate').controller('testFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

  // $scope.name = mainService.test;
}])

angular.module('realEstate').controller('welcomeFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])

angular.module('realEstate').directive('contact', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/contact.html'
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
    templateUrl: '../views/testimonials.html'
  }

})

angular.module('realEstate').directive('welcome', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/welcome.html'
  }
})

angular.module('realEstate').service('mainService', function() {

  this.test = 'david';
})

angular.module('realEstate', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      controller: 'homeFrontCtrl',
      url: '/'
    }),
  $stateProvider
    .state('postTestimonial', {
      templateUrl: './views/postTestimonial.html',
      controller: 'postTestFrontCtrl',
    })




}])

angular.module('realEstate').controller('contactFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])


angular.module('realEstate').controller('mainCtrl', ["$scope", function($scope) {
  $(document).ready(function() {
      // Select link by id and add click event
      $('#welcome-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#welcome-view").offset().top }, // Tell it to scroll the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#testimonials-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#testimonials-view").offset().top }, // Tell it toscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#newsletter-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#newsletter-view").offset().top }, // Tell it tscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#contact-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#contact-view").offset().top }, // Tell it scroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#welcome-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#testimonials-view").offset().top }, // Tell it toscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#testimonials-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#newsletter-view").offset().top }, // Tell it tscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#newsletter-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#contact-view").offset().top }, // Tell it scroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
    })
}])

angular.module('realEstate').controller('newsFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])

angular.module('realEstate').controller('postTestFrontCtrl', ["$scope", "mainService", function($scope, mainService) {
  
}])

angular.module('realEstate').controller('testFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

  // $scope.name = mainService.test;
}])

angular.module('realEstate').controller('welcomeFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])

angular.module('realEstate').directive('contact', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/contact.html'
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
    templateUrl: '../views/testimonials.html'
  }

})

angular.module('realEstate').directive('welcome', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/welcome.html'
  }
})

angular.module('realEstate').service('mainService', function() {

  this.test = 'david';
})

angular.module('realEstate', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      controller: 'homeFrontCtrl',
      url: '/'
    }),
  $stateProvider
    .state('postTestimonial', {
      templateUrl: './views/postTestimonial.html',
      controller: 'postTestFrontCtrl',
    })




}])

angular.module('realEstate').controller('contactFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])

angular.module('realEstate').controller('homeFrontCtrl', ["$scope", "mainService", function($scope, mainService) {
  
}])

angular.module('realEstate').controller('mainCtrl', ["$scope", function($scope) {
  $(document).ready(function() {
      // Select link by id and add click event
      $('#welcome-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#welcome-view").offset().top }, // Tell it to scroll the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#testimonials-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#testimonials-view").offset().top }, // Tell it toscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#newsletter-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#newsletter-view").offset().top }, // Tell it tscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#contact-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#contact-view").offset().top }, // Tell it scroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#welcome-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#testimonials-view").offset().top }, // Tell it toscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#testimonials-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#newsletter-view").offset().top }, // Tell it tscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#newsletter-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#contact-view").offset().top }, // Tell it scroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
    })
}])

angular.module('realEstate').controller('newsFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])

angular.module('realEstate').controller('postTestFrontCtrl', ["$scope", "mainService", function($scope, mainService) {
  
}])

angular.module('realEstate').controller('testFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

  // $scope.name = mainService.test;
}])

angular.module('realEstate').controller('welcomeFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])

angular.module('realEstate').directive('contact', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/contact.html'
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
    templateUrl: '../views/testimonials.html'
  }

})

angular.module('realEstate').directive('welcome', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/welcome.html'
  }
})

angular.module('realEstate').service('mainService', function() {

  this.test = 'david';
})

angular.module('realEstate', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      controller: 'homeFrontCtrl',
      url: '/'
    }),
  $stateProvider
    .state('postTestimonial', {
      templateUrl: './views/postTestimonial.html',
      controller: 'postTestFrontCtrl',
    })




}])

angular.module('realEstate').service('mainService', function() {

  this.test = 'david';
})

angular.module('realEstate').directive('contact', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/contact.html'
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
    templateUrl: '../views/testimonials.html'
  }

})

angular.module('realEstate').directive('welcome', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/welcome.html'
  }
})

angular.module('realEstate').controller('contactFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])

angular.module('realEstate').controller('homeFrontCtrl', ["$scope", "mainService", function($scope, mainService) {
  
}])

angular.module('realEstate').controller('mainCtrl', ["$scope", function($scope) {
  $(document).ready(function() {
      // Select link by id and add click event
      $('#welcome-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#welcome-view").offset().top }, // Tell it to scroll the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#testimonials-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#testimonials-view").offset().top }, // Tell it toscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#newsletter-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#newsletter-view").offset().top }, // Tell it tscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#contact-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#contact-view").offset().top }, // Tell it scroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#welcome-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#testimonials-view").offset().top }, // Tell it toscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#testimonials-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#newsletter-view").offset().top }, // Tell it tscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#newsletter-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#contact-view").offset().top }, // Tell it scroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
    })
}])

angular.module('realEstate').controller('newsFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])

angular.module('realEstate').controller('postTestFrontCtrl', ["$scope", "mainService", function($scope, mainService) {
  
}])

angular.module('realEstate').controller('testFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

  // $scope.name = mainService.test;
}])

angular.module('realEstate').controller('welcomeFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])

angular.module('realEstate', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      controller: 'homeFrontCtrl',
      url: '/'
    }),
  $stateProvider
    .state('postTestimonial', {
      templateUrl: './views/postTestimonial.html',
      controller: 'postTestFrontCtrl',
    })




}])

angular.module('realEstate').controller('contactFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])

angular.module('realEstate').controller('homeFrontCtrl', ["$scope", "mainService", function($scope, mainService) {
  
}])

angular.module('realEstate').controller('mainCtrl', ["$scope", function($scope) {
  $(document).ready(function() {
      // Select link by id and add click event
      $('#welcome-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#welcome-view").offset().top }, // Tell it to scroll the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#testimonials-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#testimonials-view").offset().top }, // Tell it toscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#newsletter-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#newsletter-view").offset().top }, // Tell it tscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#contact-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#contact-view").offset().top }, // Tell it scroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#welcome-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#testimonials-view").offset().top }, // Tell it toscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#testimonials-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#newsletter-view").offset().top }, // Tell it tscroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
      // Select link by id and add click event
      $('#newsletter-anchor').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#contact-view").offset().top }, // Tell it scroll to the top #bottom
          3500 // How long scroll will take in milliseconds
        );
        // Prevent default behavior of link
        return false;
      });
    })
}])

angular.module('realEstate').controller('newsFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

}])

angular.module('realEstate').controller('postTestFrontCtrl', ["$scope", "mainService", function($scope, mainService) {
  
}])

angular.module('realEstate').controller('testFrontCtrl', ["$scope", "mainService", function($scope, mainService) {

  // $scope.name = mainService.test;
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
    templateUrl: '../views/testimonials.html'
  }

})

angular.module('realEstate').directive('welcome', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/welcome.html'
  }
})

angular.module('realEstate').service('mainService', function() {

  this.test = 'david';
})
