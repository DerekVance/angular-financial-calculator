app.controller('gainLoss', ['$scope', function ($scope){
  $scope.data = {market: 0, purchase: 0};

  $scope.showModal = function () {
    $scope.showDescription = !$scope.showDescription;
  }

  $scope.MKcalculate = function () {
    dif =  $scope.data.market - $scope.data.purchase;
    if (dif < 0) {
      $scope.data.growth = 'loss';
    } else {
      $scope.data.growth = 'gain';
    }
    $scope.data.percent = ((dif / $scope.data.purchase) * 100).toFixed(2) < 0 ? -((dif / $scope.data.purchase) * 100).toFixed(2) : ((dif / $scope.data.purchase) * 100).toFixed(2) ;
  };

  if($scope.data.futureValue == "$ NaN") {
    $scope.data.futureValue = "$ "
  }

}]);
