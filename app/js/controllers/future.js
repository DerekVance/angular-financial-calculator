app.controller('future', ['$scope', function($scope){
  $scope.data = { present: 0 , years: 0, rate: 0 };
  $scope.FVcalculate = function () {
    rate = $scope.data.rate / 100;
    cp = $scope.data.years * $scope.data.compound;
    int = rate / $scope.data.compound;
    $scope.data.futureValue = '$ ' + ($scope.data.present * Math.pow( (1 + int) , cp )).toFixed(2);
  }
}])
