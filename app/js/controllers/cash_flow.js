app.controller('cashFlow', ['$scope', function($scope){
  $scope.data = {income: 0, expenses: 0};
  $scope.showDescription = false;

  $scope.showModal = function () {
    $scope.showDescription = !$scope.showDescription;
  }

  $scope.CFcalculate = function () {
    $scope.data.cashFlow = '$ ' + ($scope.data.income - $scope.data.expenses).toFixed(2);
      if($scope.data.cashFlow === "$ NaN") {
        $scope.data.cashFlow  = "$ "
      }
  };


}]);
