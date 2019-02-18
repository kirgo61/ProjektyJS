var ball= document.querySelector("#kulka");                     // zmienne
var container = document.getElementsByClassName("container")[0];
var amountOfHoles = [];
var beginning=false;
var speedX = 0, speedY = 0;
var positionX = 20, positionY = 20;
window.addEventListener('deviceorientation', positionChanged)
function start(){                                               //start
    beginning=true;
    makeHoles();                       // Tworzenie dziur
    moveBall();                      // ruch kulki 
    document.getElementById("beginning").hidden=true;
}
function positionChanged(e){            // Funkcja napędu kulki z żyroskopu
    speedX=e.gamma/45
    speedY=e.beta/45
}
function restart(){                                 // restart 
    beginning=true;
    for(i=container.childElementCount;i>0;i--){     // usunięcie poprzednich dziur
        if(container.childNodes[i].nodeName=="DIV"){
            if(container.childNodes[i].id!=="kulka"){
                container.removeChild(container.childNodes[i])
            }
        }
    }
    positionX = 20, positionY = 20;
    amountOfHoles = [];
    makeHoles();                   
    moveBall();               
    document.getElementById("restart").hidden=true;
}
function moveBall(){                 // ruch kulki
    if(positionX+speedX<window.innerWidth-50 && positionX+speedX>0){  // ograniczenia kulki
        positionX+=speedX;
        ball.style.left=positionX+'px';        
    }
    if(positionY+speedY<window.innerHeight-50 && positionY+speedY>0){
        positionY+=speedY;
        ball.style.top=positionY+'px';        
    }
                                                 //czy wpadło do dziury
    for(i=0;i<amountOfHoles.length;i++) {
        if(positionY<Math.floor(amountOfHoles[i].style.top.slice(0,-2))+50&&positionY>amountOfHoles[i].style.top.slice(0,-2)){
            if(positionX>amountOfHoles[i].style.left.slice(0,-2)&&positionX<Math.floor(amountOfHoles[i].style.left.slice(0,-2))+50){
                if(amountOfHoles[i].classList.contains("goodGap")){
                    amountOfHoles[i].classList.remove("goodGap");
                    amountOfHoles.forEach(e=>{if(e.classList.contains("tmpGap")){
                        e.classList.remove("tmpGap");
                        e.classList.add("gap");
                    }})
                    amountOfHoles[i].classList.add("tmpGap");
                    window.prompt("wygrałeś!");
                    speedX = 0;
                    speedY = 0;
                    document.getElementById("restart").hidden=false;                   
                }
                else if(amountOfHoles[i].classList.contains("gap")){     // end
                beginning=false;
                window.prompt("Przegrałeś!");
                speedX = 0;
                speedY = 0;
                document.getElementById("restart").hidden=false;
            }
        }   
    }
    };
    if(beginning==true){
        window.requestAnimationFrame(moveBall)
    }
}
function makeHoles(){                                  //liczba dziur zależna od rozmiaru ekranu
    for(i=2;i<(window.innerWidth/100);i++){
        var hole = document.createElement('div');
        hole.classList.add("gap");
        hole.style.left=100*i+Math.random()*75-95+'px';
        hole.style.top=Math.random()*(window.innerHeight-95)/2+'px';
        amountOfHoles.push(hole);
        container.appendChild(hole);
    }
    for(i=2;i<(window.innerWidth/100);i++){
        var hole = document.createElement('div');
        hole.classList.add("gap");
        hole.style.left=100*i+Math.random()*75-95+'px';
        hole.style.top=Math.random()*(window.innerHeight)/2+window.innerHeight/2-100+'px';
        amountOfHoles.push(hole);
        container.appendChild(hole);
    }
    checkHoles();
    randomGoodHole(2);
}
function checkHoles(){                                      //Lepsze rozmieszczenie dziur
    for(i=0;i<amountOfHoles.length-1;i++){                         
        for(j=i+1;j<amountOfHoles.length;j++){
            if(amountOfHoles[j].style.left.slice(0,-2)>amountOfHoles[i].style.left.slice(0,-2)+75 && amountOfHoles[j].style.top.slice(0,-2)>amountOfHoles[i].style.top.slice(0,-2)+75){
                amountOfHoles[j].style.top=amountOfHoles[j].style.top.slice(0,-2)+70+'px';
                amountOfHoles[j].style.left=amountOfHoles[j].style.left.slice(0,-2)+70+'px';
            }
        }
    }
}
function randomGoodHole(i){                                 // Dodanie dobrej dziury
    var goodHole = Math.floor(Math.random()*amountOfHoles.length);
    if(goodHole ==i&&i<amountOfHoles.length)i++;                  // uniknięcie pojawienia się dobrej dziury w tym samym miejscu
    else i--;
    amountOfHoles[goodHole].classList.remove("gap");
    amountOfHoles[goodHole].classList.add("goodGap")
}