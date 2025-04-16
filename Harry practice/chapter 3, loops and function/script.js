// q-1
const marks1 = {
    limon : 90,
    rassel : 80,
    imran : 70,
    faysal : 60
};

for (let i = 0; i < Object.keys(marks1).length; i++) {
    console.log(`The marks1 of ${Object.keys(marks1)[i]} are ${marks1[Object.keys(marks1)[i]]}`)
}

// q-2
const marks = {
    limon : 90,
    rassel : 80,
    imran : 70,
    faysal : 60
};

for (let key in marks) {
    console.log(`The marks of ${key} are ${marks[key]}`)
}

// q-3
let cn = 5;
let i;

while (i != cn) {
    i = parseInt(prompt("Enter the correct number"));
    console.log(`Try again`)
};
console.log(`You have entered the correct number`);

// q-4
const mean = (a, b, c, d) => {
    return (a + b + c + d) / 5
}
console.log(mean(3, 5, 34, 9))