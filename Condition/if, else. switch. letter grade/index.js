// letter grade
let marks = prompt("Enter Your Marks : ");

if (marks >= 80)
    console.log("A+");
else if (marks >= 70)
    console.log("A");
else if (marks >= 60)
    console.log("A-");
else if (marks >= 50)
    console.log("B");
else if (marks >= 40)
    console.log("C");
else if (marks >= 33)
    console.log("D");
else
    console.log("F");


// letter grade
let marks2 = prompt("Enter Your Marks2 : ");

if (marks2 > 100 || marks2 < 0)
    console.log("Invalid");
else if (marks2 >= 80 && marks2 <= 100)
    console.log("A+");
else if (marks2 >= 70 && marks2 <= 79)
    console.log("A");
else if (marks2 >= 60 && marks2 <= 69)
    console.log("A-");
else if (marks2 >= 50 && marks2 <= 59)
    console.log("B");
else if (marks2 >= 40 && marks2 <= 49)
    console.log("C");
else if (marks2 >= 33 && marks2 <= 39)
    console.log("D");
else
    console.log("F");


// vowel consonant
let letter = prompt("Enter a letter : ");
letter = letter.toLowerCase();

if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
    console.log("Vowel");
else
    console.log("Consonant");


// switch, case, break, default
let digit = prompt("Enter a digit : ");

switch (digit) {
    case "0":
        console.log("Zero")
        break;
    case "1":
        console.log("One")
        break;
    case "2":
        console.log("Two")
        break;
    case "3":
        console.log("Three")
        break;
    case "4":
        console.log("Four")
        break;
    case "5":
        console.log("Five")
        break;
    case "6":
        console.log("Six")
        break;
    case "7":
        console.log("Seven")
        break;
    case "8":
        console.log("Eight")
        break;
    case "9":
        console.log("Nine")
        break;
    default:
    console.log("Invalid");
}


// vowel consonant
let letter2 = prompt("Enter any letter : ");
letter2 = letter2.toLowerCase();

switch (letter2) {

    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;

    default:
        console.log("Consonant");
}
