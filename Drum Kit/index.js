// detecting Button press

numberOfButtons=document.querySelectorAll(".drum").length;
for (var i=0;i<numberOfButtons;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    var buttonInnerHtml=this.innerHTML; //if the button was pressed i will check the inner Html of the button that got pressed ...

      makesound(buttonInnerHtml);//...and send that to makesound in order to play the relevent sound 
      buttonAnimation(buttonInnerHtml);
  
});
}
// detecting keyboard press 
document.addEventListener("keydown",function(event) {       // and if the keydown was detected I sent the event .key property of the event 
  makesound(event.key);        // so if i pressed of w button it will make sound of crash 
  buttonAnimation(event.key);
});

function makesound(key){

    switch (key) {
        case "w":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
         case "a":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "k":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;    
        case "l":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        default:
            console.log(key)
            break;
    }



}

function buttonAnimation(currentKey){
  var activeButton=  document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
      activeButton.classList.remove("pressed");
  },100);
  
}


 