 app.controller('showOrder', function ($scope,$http,) {
 $scope.showorder = function(){
 	$scope.suma = 0;
   $http.get("base/getorder.php")
    .then(function(response) {
       $scope.order = response.data;
       for(x = 0; x< $scope.order.length; x++){
       console.log($scope.order[x].kaina);
        $scope.total = $scope.suma += parseFloat($scope.order[x].kaina);
       //console.log($scope.total.toFixed(2));
       $scope.bendra = $scope.total.toFixed(2);
   }
 });
}

});