angular.module("iNeedWork", []);
angular.module("iNeedWork").controller("iNeedWorkController",  $scope=>{
  function sendTheJobAlert(){
    alert("I'm looking for job!");
  };

  $scope.sendTheJobAlert = sendTheJobAlert;
});
