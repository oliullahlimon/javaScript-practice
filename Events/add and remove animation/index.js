for (let i = 0; i < 3; i++){

    document.querySelectorAll("button")[i].addEventListener("click", function(){
        let text = this.innerHTML;
        audioPlay(text);
        playAnimation(text);
        
    })
}

function audioPlay(text){
    switch(text){
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

function playAnimation (text) {
    let selectedBtn = document.querySelector("." + text)
    selectedBtn.classList.add("anim");

    setTimeout(function(){
        selectedBtn.classList.remove("anim");
    }, 2000);
}