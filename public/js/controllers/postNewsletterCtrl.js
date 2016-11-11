angular.module("realEstate").controller("postNewsletterCtrl", function($scope, mainService) {
  console.log('postNewsletterCtrl');
  $scope.postNewsletter = function(title, date, newsletter) {
    mainService.postNewsletter(title, date, newsletter).then(function(response) {
      console.log(response);
    })
  }
});
