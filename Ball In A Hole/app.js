var ball   = document.querySelector('.ball');
var hole = document.querySelector('.goodHole');
var ground = document.querySelector('.ground');
var output = document.querySelector('.output');
var maxX = ground.clientWidth  - ball.clientWidth;
var maxY = ground.clientHeight - ball.clientHeight;
var holePosition = hole.getBoundingClientRect();
console.log(holePosition.top, holePosition.bottom,holePosition.left,holePosition.right);


function handleOrientation(event) {
    var x = event.beta;  // In degree in the range [-180,180]
    var y = event.gamma; // In degree in the range [-90,90]
    var ballPosiiton = ball.getBoundingClientRect();
    // console.log(Math.floor(ballPosiiton.top),Math.floor(ballPosiiton.bottom),Math.floor(ballPosiiton.left),Math.floor(ballPosiiton.right));




    if( ((Math.floor(ballPosiiton.left) <=holePosition.left+20)&&(Math.floor(ballPosiiton.left) >=holePosition.left-20))  &&  ((Math.floor(ballPosiiton.top) <=holePosition.top+20)&&(Math.floor(ballPosiiton.top) >=holePosition.top-20))  &&  ((Math.floor(ballPosiiton.bottom) <=holePosition.bottom+20)&&(Math.floor(ballPosiiton.bottom) >=holePosition.bottom-20))  &&  ((Math.floor(ballPosiiton.right) <=holePosition.right+20)&&(Math.floor(ballPosiiton.right) >=holePosition.right-20)) ){
        console.log("WYGRANKO");
    }



    // if(Math.floor(ballPosiiton.top) == holePosition.top&&Math.floor(ballPosiiton.bottom)==holePosition.bottom){
    //     alert('WYGRAŁEŚ!!!');
    // }
  
    output.innerHTML  = "beta : " + x + "\n";
    output.innerHTML += "gamma: " + y + "\n";
  
    // Because we don't want to have the device upside down
    // We constrain the x value to the range [-90,90]
    if (x >  90) { x =  90};
    if (x < -90) { x = -90};
  
    // To make computation easier we shift the range of 
    // x and y to [0,180]
    x += 90;
    y += 90;
  
    // 10 is half the size of the ball
    // It center the positioning point to the center of the ball
    ball.style.top  = (maxX*x/180 - 10) + "px";
    ball.style.left = (maxY*y/180 - 10) + "px";
  }
  
  window.addEventListener('deviceorientation', handleOrientation);
