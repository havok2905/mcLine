angular.module('d3App').controller('HomeCtrl', [
  '$scope',
  '$interval',
  function($scope, $interval) {

    $interval(function() {
      $scope.lineData = [
        { x: 1,   y: $scope.rand(20, 60) },
        { x: 20,  y: $scope.rand(20, 60) },
        { x: 40,  y: $scope.rand(20, 60) },
        { x: 60,  y: $scope.rand(20, 60) },
        { x: 80,  y: $scope.rand(20, 60) },
        { x: 100, y: $scope.rand(20, 60) }
      ]
    }, 250);

    $scope.rand = function(min, max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    };

    $scope.lineData = [
      { x: 1,   y: 5  },
      { x: 20,  y: 20 },
      { x: 40,  y: 10 },
      { x: 60,  y: 40 },
      { x: 80,  y: 5  },
      { x: 100, y: 60 }
    ];

    $scope.lineStyles = {
      width:   1000,
      height:  500,
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
