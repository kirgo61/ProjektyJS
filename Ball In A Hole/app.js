var ball   = document.querySelector('.ball');
var goodHole = document.querySelector('.goodHole');
var badHole1 = document.querySelector('.badHole1');
var badHole2 = document.querySelector('.badHole2');
var badHole3 = document.querySelector('.badHole3');
var badHole4 = document.querySelector('.badHole4');
var ground = document.querySelector('.playGround');
var out = document.querySelector('.out');
var maxX = ground.clientWidth  - ball.clientWidth;
var maxY = ground.clientHeight - ball.clientHeight;
var holePosition = goodHole.getBoundingClientRect();
var badHolePosision1 = badHole1.getBoundingClientRect();
var badHolePosision2 = badHole2.getBoundingClientRect();
var badHolePosision3 = badHole3.getBoundingClientRect();
var badHolePosision4 = badHole4.getBoundingClientRect();

// console.log(holePosition.top, holePosition.bottom,holePosition.left,holePosition.right);

function gyroMove(e) {
    var x = e.beta;  
    var y = e.gamma;
    var ballPosiiton = ball.getBoundingClientRect();
    // console.log(Math.floor(ballPosiiton.top),Math.floor(ballPosiiton.bottom),Math.floor(ballPosiiton.left),Math.floor(ballPosiiton.right));
    function checkWin(e){
        if( ((Math.floor(ballPosiiton.left) <=e.left+30)&&(Math.floor(ballPosiiton.left) >=e.left-30))  &&  ((Math.floor(ballPosiiton.top) <=e.top+30)&&(Math.floor(ballPosiiton.top) >=e.top-30))  &&  ((Math.floor(ballPosiiton.bottom) <=e.bottom+30)&&(Math.floor(ballPosiiton.bottom) >=e.bottom-30))  &&  ((Math.floor(ballPosiiton.right) <=e.right+30)&&(Math.floor(ballPosiiton.right) >=e.right-30))){
            alert('Wygrałeś, odśwież stronę!');
        }
    }
    function checkLose(e){
        if(((Math.floor(ballPosiiton.left) <=e.left+30)&&(Math.floor(ballPosiiton.left) >=e.left-30))  &&  ((Math.floor(ballPosiiton.top) <=e.top+30)&&(Math.floor(ballPosiiton.top) >=e.top-30))  &&  ((Math.floor(ballPosiiton.bottom) <=e.bottom+30)&&(Math.floor(ballPosiiton.bottom) >=e.bottom-30))  &&  ((Math.floor(ballPosiiton.right) <=e.right+30)&&(Math.floor(ballPosiiton.right) >=e.right-30))){
            alert("Przegrałeś, odśwież stronę!");
        }
    }
    checkWin(holePosition);
    checkLose(badHolePosision1);
    checkLose(badHolePosision2);
    checkLose(badHolePosision3);
    checkLose(badHolePosision4);
    if (x >  90) { x =  90};
    if (x < -90) { x = -90};
    x += 90;
    y += 90;
    ball.style.top  = (maxX*x/180 - 10) + "px";
    ball.style.left = (maxY*y/180 - 10) + "px";
  }
  window.addEventListener('deviceorientation', gyroMove);
