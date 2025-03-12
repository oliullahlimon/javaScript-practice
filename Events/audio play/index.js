for (let i = 0; i < 3; i++){

    document.querySelectorAll("button")[i].addEventListener("click", function(){
        let text = this.innerHTML;
        audioPlay(text);
        
    })
}

// with switch statement
function audioPlay (x) {
    switch(x){
        case "a":
            var audio = new Audio("audio/audio1.mp3");
            audio.play();
            break;

        case "b":
            var audio = new Audio("audio/audio2.mp3");
            audio.play();
            break;

        case "c":
            var audio = new Audio("audio/audio3.mp3");
                    audio.play();
            break;
    }
}

// with if else statement
// function audioPlay(x) {
//     if (x == "a") {
//         var audio = new Audio("audio/audio1.mp3");
//         audio.play();
//     } else if (x == "b") {
//         var audio = new Audio("audio/audio2.mp3");
//         audio.play();
//     } else if (x == "c") {
//         var audio = new Audio("audio/audio3.mp3");
//         audio.play();
//     }
// }