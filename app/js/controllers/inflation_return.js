app.controller('inflationAdjReturn', ['$scope', function ($scope){
  $scope.data = {inf: 3};
  $scope.inCalculate = function () {
    inv = $scope.data.invRet / 100;
    inf = $scope.data.inf / 100;
    invRet = 1 + inv;
    bottom = 1 + inf;
    console.log(invRet, bottom);
    $scope.data.return = (((invRet / bottom) - 1) * 100).toFixed(2) + ' %';
  }

}])
