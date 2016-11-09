angular.module('realEstate').controller('loginRegisterCtrl', function($scope, mainService, authService, $state) {

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

})