class Password {
    constructor() {
        console.log("Welcome to Password Generator")
        this.pass = ""
        console.log(this)
    }
    generatorPassword(len) {
        let alphabet = "abcdefghijklmnopqrstuvwxyz"
        let numbers = "1234567890"
        let specials = "!$#@^&*><|~?/"
        if(len < 3) {
            console.log("Your password should be atleast 3 characters long")
        }
        else{
            let i = 0;
            while(i < len) {
                this.pass += alphabet[Math.floor(Math.random() * alphabet.length)]
                this.pass += numbers[Math.floor(Math.random() * numbers.length)]
                this.pass += specials[Math.floor(Math.random() * specials.length)]
                i += 3; //For example, if len is 12, the loop would iterate four times (adding three characters in each iteration) to create a password of length 12.
            }
            this.pass = this.pass.slice(0, len)
            return this.pass
        }
    }
}

let userInput = parseInt(prompt("How many characters password do you want: "))
let p = new Password ()
document.write(p.generatorPassword(userInput))
