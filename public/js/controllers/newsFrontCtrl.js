angular.module('realEstate').controller('newsFrontCtrl', function($scope, mainService) {
  mainService.getNewsletters().then(function(response) {
    console.log("newsletter response: ", response.data);
    $scope.newsletters = response.data;
  });
})
