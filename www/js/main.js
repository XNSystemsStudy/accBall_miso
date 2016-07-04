
console.log("AAAA");

 var watchID = null;
var startBtn=document.getElementById("startBtn");
//button.addEventListener("click",getAcceler,false);
startBtn.addEventListener("click",startWatch,false);
var stopBtn=document.getElementById("stopBtn");
        stopBtn.addEventListener("click",stopWatch,false);
var svg=document.getElementById("svg");
var circle=document.getElementById("circle");
var innerWidth = window.innerWidth;
var innerHeight = window.innerHeight - 40;
var posX = (innerWidth - 50) / 2; 
var posY = (innerHeight - 50) / 2;

circle.setAttribute('cx', posX);
circle.setAttribute('cy', posY);

function startWatch() {
  var options;
  //options = { frequency: 1000 };
  options = { frequency: 100 };
  watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

function stopWatch() {
  if (watchID) {
    navigator.accelerometer.clearWatch(watchID);
    watchID = null;
  }
}

function onSuccess(acceleration) {
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

  posX += -1 * (acceleration.x * 1.5);
  posY += (acceleration.y * 1.5);

  //  posX += acceleration.x;
  //  posY -= acceleration.y;

  circle.setAttribute('cx', posX);
  circle.setAttribute('cy', posY);

}

function onError() {
  alert('onError!');
}

/*function getAcceler(){
  console.log("getAcceler");
  navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);*/
/*  var circle = document.createElementNS("http://www.w3.org/2000/svg", "cricle");
  circle.setAttribute('stroke', "yellow");
  circle.setAttribute('stroke-width', '4');
  circle.setAttribute('fill', "yellow");
  circle.setAttribute('cx', '50');
  circle.setAttribute('cy', '50');
  circle.setAttribute('r', '40');
  svg.appendChild(circle);
  console.log(svg);*/
/*}*/