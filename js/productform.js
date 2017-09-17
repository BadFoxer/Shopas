var app = angular.module('preke', []);
app.controller('orderis', function ($scope,$http,) {
	$scope.kiekis = 1;
  
	$scope.verify = function(){
    var retVal = confirm("Ar jūs tikrai norite užsisakyti?");
    if (retVal)
    {
        alert("Sėkmingai užsakyta");
        this.pavadinimasId = event.target.id;
    this.kainaName = event.target.name;
    this.total = this.kiekis * this.kainaName;
   $http.post("base/insert.php",{'pavadinimas':this.pavadinimasId,'kiekis': this.kiekis, 'kaina': this.total})
    .then(function (success){
     console.log("i eat some data :D");
       $scope.showlist();
       $scope.showimages();
      
      
   });

        return true;
    } 
    else
    {

        alert("Prekė neužsakyta");
        return false;
    }
}

   $scope.insert = function(){
    this.pavadinimasId = event.target.id;
    this.kainaName = event.target.name;
    this.total = this.kiekis * this.kainaName;
   $http.post("base/insert.php",{'pavadinimas':this.pavadinimasId,'kiekis': this.kiekis, 'kaina': this.total})
    .then(function (success){
     console.log("i eat some data :D");
       $scope.showlist();
       $scope.showimages();
      
      
   });
    
       
  }
     
 

 $scope.showlist = function(){
   $http.get("base/getproduct.php")
    .then(function(response) {
       $scope.list = response.data;
       //console.log('i show data to user wee :)');
 });
  }
   $scope.showimages = function(){
     $http.get("base/getimg.php")
    .then(function(response) {
              $scope.images = response.data;
       //console.log('i show data to user wee :)');
 });
  }
  

});