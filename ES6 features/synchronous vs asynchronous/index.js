// synchronous programming
const taskOne = () => {
  console.log("Task1");
};

const taskTwo = () => {
  console.log("Task2");
};

const taskThree = () => {
  console.log("Task3");
};

const taskFour = () => {
  console.log("Task4");
};

taskOne();
taskTwo();
taskThree();
taskFour();

console.log("");

// asynchronous programming
const taskFive = () => {
  console.log("Task5");
};

const taskSix = () => {
  setTimeout(() => {
    console.log("Task6 is loading");
  }, 2000);
};

const taskSeven = () => {
  console.log("Task7");
};

const taskEight = () => {
  setTimeout(() => {
    console.log("Task8 is loading");
  }, 4000);
};

taskFive();
taskSix();
taskSeven();
taskEight();
