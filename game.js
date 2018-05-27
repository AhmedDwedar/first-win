var p1button = document.getElementById("p1");
var p2button = document.querySelector("#p2");
var p1display = document.getElementById("dispaly1");
var p2display = document.getElementById("dispaly2");
var p1score = 0;
var p2score = 0;
var gameover = true;
var displayinput = document.querySelector("#playingto");
var numinput = document.querySelector("input");
var winnerscore =" numinput";
var resetbutton = document.getElementById("reset");


p1button.addEventListener( "click" , function(){
   
    if(gameover){
         p1score++;
        p1display.textContent = p1score;
    }
    if(p1score === winnerscore){
            gameover = false;
        }
    if(p1score === winnerscore){
 p1display.classList.add("winner");
    }
});
p2button.addEventListener( "click" , function(){
    if(gameover){
         p2score++;
        if(p2score === winnerscore){
            gameover = false;
        }
         p2display.textContent = p2score;
    }
    if(p2score === winnerscore){
 p2display.classList.add("winner");
    }
});

resetbutton.addEventListener("click" , reset);
function reset (){
    
    p1score = 0 ;
    p2score = 0 ;
    p1display.textContent = p1score;
    p2display.textContent = p2score;
    p1display.classList.remove("winner"); p2display.classList.remove("winner");
    gameover = true;
}
   
                             
numinput.addEventListener("change" , function(){

    displayinput.textContent = numinput.value;
     winnerscore = Number(numinput.value);
    reset();
    
} );
  