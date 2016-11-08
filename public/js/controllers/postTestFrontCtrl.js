angular.module('realEstate').controller('postTestFrontCtrl', function($scope, mainService) {

  $scope.postTestimonial = function(testimonial, firstname, lastname) {
    console.log(firstname, lastname, testimonial)
    mainService.postTestimonial(testimonial, firstname, lastname).then(function(response) {
      console.log(response);
    })
  }
})
