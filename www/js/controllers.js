angular.module('starter.controllers', [])

.controller('CacheCtrl', function($scope, $http) {
  $http.get('http://api.randomuser.me/').then(function(resp){
    $scope.data = resp.data.results[0];
  });
})

.controller('CacheViewCtrl', function($scope, $http) {
  $http.get('http://api.randomuser.me/').then(function(resp){
    $scope.data = resp.data.results[0];
  });
})

.controller('CachedOnEnterCtrl', function($scope, $http) {
  $scope.$on('$ionicView.enter', function(){
    // This event handler is activated when the view is entered.
    // So we can for example ask a data reload each time
    $http.get('http://api.randomuser.me/').then(function(resp){
      $scope.data = resp.data.results[0];
    });
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
