app.controller('present', ['$scope', function($scope){

  $scope.showModal = function () {
    $scope.showDescription = !$scope.showDescription;
  }

  $scope.PVcalculate = function () {
    rate = $scope.data.rate / 100;
    cp = $scope.data.years * $scope.data.compound;
    int = rate / $scope.data.compound;
    $scope.data.presentValue = '$ ' + ($scope.data.future * ( 1 / (Math.pow( (1 + int) , cp )))).toFixed(2);
    if($scope.data.presentValue == "$ NaN") {
      $scope.data.presentValue = "$ "
    }
  }
}]);
