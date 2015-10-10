app.controller('future', ['$scope', function($scope) {
  $scope.data = { present: 0 , years: 0 };

  $scope.showModal = function () {
    $scope.showDescription = !$scope.showDescription;
  }

  $scope.FVcalculate = function () {
    rate = $scope.data.rate / 100;
    cp = $scope.data.years * $scope.data.compound;
    int = rate / $scope.data.compound;
    $scope.data.futureValue = '$ ' + ($scope.data.present * Math.pow( (1 + int) , cp )).toFixed(2);
    if($scope.data.futureValue == "$ NaN") {
      $scope.data.futureValue = "$ "
    }
  };
}]);
