angular.module('realEstate').controller('testFrontCtrl', function($scope, mainService) {
    mainService.getTestimonials().then(function(response) {
      console.log("testimonial response: ", response.data);
      $scope.testimonials = response.data;
    });
})
