angular.module('realEstate', []);

angular.module('realEstate').controller('mainCtrl', ["$scope", function($scope) {
  $(document).ready(function() {
      // Select link by id and add click event
      $('#home-link').click(function() {
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#home-view").offset().top }, // Tell it to scroll the top #bottom
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
      $('#home-anchor').click(function() {
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
