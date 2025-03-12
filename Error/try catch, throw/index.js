document.querySelector("#checkButton").addEventListener("click", function(){
    const number = document.querySelector("#num").value;
    console.log(number);

    try {
        if (number < 5) {
            throw "Input is too low"

        } else if (number > 10) {
            throw "Input is too high"

        } else if (number >= 5 && number <= 10) {
            throw "Input is correct"
        }
        
    } catch (x) {
        document.querySelector("#para").textContent = x;
    } // catch catches the throw value or error. we get throw value into catch.
})