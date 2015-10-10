app.controller('timeTilDouble', ['$scope', function ($scope){
  $scope.showModal = function () {
    $scope.showDescription = !$scope.showDescription;
  };

  $scope.DIcalculate = function () {
    $scope.data.year = (72 / $scope.data.int).toFixed(2);
    if($scope.data.year === 'NaN') {
        $scope.data.year = 'Invalid Rate'
    }

  };



}]);
