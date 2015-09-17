app.controller('timeTilDouble', ['$scope', function ($scope){
  $scope.DIcalculate = function () {
    $scope.data.year = (72 / $scope.data.int).toFixed(2);
  }
}])
