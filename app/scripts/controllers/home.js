angular.module('d3App').controller('HomeCtrl', [
  '$scope',
  '$interval',
  function($scope, $interval) {

    $interval(function() {
      $scope.lineData = [
        { x: 1,   y: $scope.rand(0, 60) },
        { x: 5,   y: $scope.rand(0, 60) },
        { x: 10,  y: $scope.rand(0, 60) },
        { x: 15,  y: $scope.rand(0, 60) },
        { x: 20,  y: $scope.rand(0, 60) },
        { x: 25,  y: $scope.rand(0, 60) },
        { x: 30,  y: $scope.rand(0, 60) },
        { x: 35,  y: $scope.rand(0, 60) },
        { x: 40,  y: $scope.rand(0, 60) },
        { x: 45,  y: $scope.rand(0, 60) },
        { x: 50,  y: $scope.rand(0, 60) },
        { x: 55,  y: $scope.rand(0, 60) },
        { x: 60,  y: $scope.rand(0, 60) },
        { x: 65,  y: $scope.rand(0, 60) },
        { x: 70,  y: $scope.rand(0, 60) },
        { x: 75,  y: $scope.rand(0, 60) },
        { x: 80,  y: $scope.rand(0, 60) },
        { x: 85,  y: $scope.rand(0, 60) },
        { x: 90,  y: $scope.rand(0, 60) },
        { x: 95,  y: $scope.rand(0, 60) },
        { x: 100, y: $scope.rand(0, 60) },
      ];
    }, 500);

    $scope.rand = function(min, max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    };

    $scope.lineData = [
      { x: 1,   y: $scope.rand(0, 60) },
      { x: 5,   y: $scope.rand(0, 60) },
      { x: 10,  y: $scope.rand(0, 60) },
      { x: 15,  y: $scope.rand(0, 60) },
      { x: 20,  y: $scope.rand(0, 60) },
      { x: 25,  y: $scope.rand(0, 60) },
      { x: 30,  y: $scope.rand(0, 60) },
      { x: 35,  y: $scope.rand(0, 60) },
      { x: 40,  y: $scope.rand(0, 60) },
      { x: 45,  y: $scope.rand(0, 60) },
      { x: 50,  y: $scope.rand(0, 60) },
      { x: 55,  y: $scope.rand(0, 60) },
      { x: 60,  y: $scope.rand(0, 60) },
      { x: 65,  y: $scope.rand(0, 60) },
      { x: 70,  y: $scope.rand(0, 60) },
      { x: 75,  y: $scope.rand(0, 60) },
      { x: 80,  y: $scope.rand(0, 60) },
      { x: 85,  y: $scope.rand(0, 60) },
      { x: 90,  y: $scope.rand(0, 60) },
      { x: 95,  y: $scope.rand(0, 60) },
      { x: 100, y: $scope.rand(0, 60) },
    ];

    $scope.lineStyles = {
      width:   1000,
      height:  500,
      type:    'basis-open',
      borders: {
        top:    20,
        right:  20,
        bottom: 20,
        left:   50
      },
      color:   'blue',
      stroke:  2,
      fill:    true
    };
  }
]);
