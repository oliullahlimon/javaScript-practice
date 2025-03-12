const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("task 1 is completed");
  });
};

const taskTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task 2 is completed");
    }, 2000);
  });
};

const taskThree = () => {
  return new Promise((resolve, reject) => {
    reject("task 3 is not completed");
  });
};

const taskFour = () => {
  return new Promise((resolve, reject) => {
    resolve("task 4 is completed");
  });
};

taskOne()
  .then((value) => console.log(value))
  .then(taskTwo)
  .then((value) => console.log(value))
  .then(taskThree)
  .then((value) => console.log(value))
  .then(taskFour)
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
