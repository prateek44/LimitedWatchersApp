(function()
{
  'use strict';
  angular.module("StandardApp",[]).
  controller('StandardAppController',['$scope',StandardAppController]);
  function StandardAppController($scope)
  {
    $scope.firstName="prateek";
    // $scope.fullName=$scope.firstName;
    $scope.setFullName=function()
    {

      $scope.fullName=$scope.firstName+" bajpai";
      console.log("active live watchers",$scope.$$watchersCount);
    };
    $scope.updateFullName=function()
    {
      $scope.fullName="rajat bajpai";
      console.log($scope.fullName);
      console.log("active live watchers",$scope.$$watchersCount);

    };
    console.log("initial no of watchers",$scope.$$watchersCount);

  }
})();
