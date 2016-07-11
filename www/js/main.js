
myApp.controller("MainCtrl", ['$scope', '$timeout', function($scope, $timeout){
  console.log("controller");

  $scope.watchID = null;
  $scope.innerWidth = window.innerWidth;
  $scope.innerHeight = window.innerHeight - 40;
  $scope.posX = (innerWidth - 50) / 2;
  $scope.posY = (innerHeight - 50) / 2;

  $scope.circle = {
    x : $scope.posX,
    y : $scope.posY,
    r : 40
  };

  $scope.startWatch = function() {
    console.log("startWatch");
    var options;
    options = { frequency: 100 };
    $scope.watchID = navigator.accelerometer.watchAcceleration($scope.onSuccess, $scope.onError, options);
  };

  $scope.stopWatch = function() {
    console.log("stopWatch");
    if ($scope.watchID) {
      navigator.accelerometer.clearWatch($scope.watchID);
      $scope.watchID = null;
    }
  };

  $scope.onSuccess = function(acceleration) {
  /*alert('Acceleration X: ' + acceleration.x + '\n' +
        'Acceleration Y: ' + acceleration.y + '\n' +
        'Acceleration Z: ' + acceleration.z + '\n' +
        'Timestamp: '      + acceleration.timestamp + '\n');*/
  /*var element = document.getElementById('accelerometer');
    element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                      'Acceleration Y: ' + acceleration.y + '<br />' +
                      'Acceleration Z: ' + acceleration.z + '<br />' +
                      'windowWidth: ' + window.innerWidth + '<br />' +
                      'windowHeight: ' + window.innerHeight + '<br />' +
                      'Timestamp: '      + acceleration.timestamp + '<br />';*/
    
    $scope.posX += -1 * (acceleration.x * 1.5);
    $scope.posY += (acceleration.y * 1.5);

    $timeout(function() {  
      $scope.circle.x = $scope.posX;
      $scope.circle.y = $scope.posY;
    }, 0); 
  }

  $scope.onError = function () {
    alert('onError!');
  }

}]);
