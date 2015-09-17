app.controller('cashFlow', ['$scope', function($scope){
  $scope.data = {income: 0, expenses: 0};
  $scope.CFcalculate = function () {
    $scope.data.cashFlow = '$ ' + ($scope.data.income - $scope.data.expenses).toFixed(2);
  }
}])
