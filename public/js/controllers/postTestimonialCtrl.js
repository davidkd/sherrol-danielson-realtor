angular.module('realEstate').controller('postTestimonialCtrl', function($scope, mainService) {
console.log('hey');
  $scope.postTestimonial = function(testimonial, firstname, lastname) {
    mainService.postTestimonial(testimonial, firstname, lastname).then(function(response) {
      console.log(response);
    })
  }
})
