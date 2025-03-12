// callback and higher order function

const square = (x) => {
    console.log(`square of ${x}: ${x * x}`);
}
// square(5);

// const y = square;
// y(10);

const higherOrderFunction = (num, callback) => {
    callback(num);
}
higherOrderFunction(6, square);

console.log("")

const taskOne = (callback) => {
    console.log("Task1")
    callback()
}

const taskTwo = (callback) => {
    setTimeout(() => {
        console.log("Task2 is loading")
        callback()
    }, 2000);
}

const taskThree = (callback) => {
    console.log("Task3")
    callback()
}

const taskFour = () => {
    console.log("Task4")
}

taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour();
        })
    })
})

const message = (callback) => {
    console.log("This is a message")
    callback()
}

const message2 = () => {
    console.log("This is a message too")
}

message(message2)