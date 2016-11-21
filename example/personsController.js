var app = angular.module("myApp",[]);
app.controller("personsController",function($scope, $http){

  var req = {
    method: 'GET',
    url: 'http://localhost:8080/people',
    headers: {
     'Content-Type': undefined
    }
  }

  $scope.persons = [];
  $scope.findPersons = function(){
    $http(req)
    .then(function (response) {
      $scope.persons = response.data._embedded.people;
    },
  function(error){
    console.log('error!');
  });
  };
  $scope.findPersons();
});
