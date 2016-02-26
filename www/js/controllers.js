angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('homeCtrl', function($ionicPlatform, $scope, $cordovaDevice) {
    $scope.DateNow = Date.now();   
})

.controller('deviceStatusCtrl', function($ionicPlatform, $scope, $cordovaDevice, $cordovaNetwork) {
    $ionicPlatform.ready(function() {
            var device = $cordovaDevice.getDevice();
            $scope.manufacturer = device.manufacturer;
            $scope.platform = device.platform;
            $scope.uuid = device.uuid;
            // Network Plugin
            $scope.type = $cordovaNetwork.getNetwork()
            $scope.isOnline = $cordovaNetwork.isOnline()
            //$scope.isOffline = $cordovaNetwork.isOffline()  
  });  
})



