angular.module('realEstate').directive('newsletter', function() {
  return {
    restrict: 'AE',
    templateUrl: '../views/newsletter.html',
    controller: "newsFrontCtrl"
  }
})
