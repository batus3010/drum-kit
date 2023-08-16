
allDrumButton = document.querySelectorAll(".drum").length;
// look through document, add event listener to every button has drum class, when button got clicked, log 
// it out the console 
for(var i = 0; i < allDrumButton; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });    
}



function playAudio(audioFile){
    path = './sounds/' + audioFile + '.mp3'; 
    var audio = new Audio(path);
    audio.play();
}

function makeSound(key){
    switch (key) {
        case "w":
            playAudio("tom-1")
            // var audio = new Audio('./sounds/tom-1.mp3');
            // audio.play();
            break;
        case "a":
            playAudio("tom-2")
            break;
        
        case "d":
            playAudio("tom-3")
            break;

        case "s":
            playAudio("tom-4")
            break;
        
        case "j":
            playAudio("snare")
            break;
            
        case "k":
            playAudio("crash")
            break;
            
        case "l":
            playAudio("kick-bass")
            break;

        default: console.log(buttonInnerHTML)
            break;
    }
}


// detecting keyboard press, add event listener to whole document
// call makeSound if correct keys are pressed
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
})