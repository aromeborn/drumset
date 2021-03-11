var drumButtons = document.querySelectorAll(".drum");
var oneDrum;
for (oneDrum =0; oneDrum < drumButtons.length; oneDrum++) {
drumButtons[oneDrum].addEventListener ("click", function () {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  
} );
}

document.addEventListener ("keydown", function (keyPressed) {
    playSound(keyPressed.key);
    buttonAnimation (keyPressed.key);
 });

function playSound(key){
    switch (key) {
        case "w":
            var crashAudio = new Audio ("sounds/crash.mp3"); 
            crashAudio.play();
            break;
        case "a":
            var kickBassAudio = new Audio ("sounds/kick-bass.mp3"); 
            kickBassAudio.play();
            break;
        case "s":
            var snareAudio = new Audio ("sounds/snare.mp3"); 
            snareAudio.play();
            break;
        case "d":
            var tom1Audio = new Audio ("sounds/tom-1.mp3"); 
            tom1Audio.play();
            break;  
        case "j":
            var tom2Audio = new Audio ("sounds/tom-2.mp3"); 
            tom2Audio.play();
            break;  
        case "k":
            var tom3Audio = new Audio ("sounds/tom-3.mp3"); 
            tom3Audio.play();
            break;  
        case "l":
            var tom4Audio = new Audio ("sounds/tom-4.mp3"); 
            tom4Audio.play();
            break; 

        default: console.log (buttonInnerHTML);
            break;
    }
}
function buttonAnimation (currentKey) {
   var activeButton = document.querySelector ( "." + currentKey);
   activeButton.classList.add ("pressed");
   setTimeout(function () {
    activeButton.classList.remove ("pressed");
   }, 100);

}
 

