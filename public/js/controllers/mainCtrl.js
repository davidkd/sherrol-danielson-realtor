angular.module('realEstate').controller('mainCtrl', function($scope) {
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
})
