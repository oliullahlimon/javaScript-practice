let a = "welcome";
console.log(a);

// how to create promise- pending, resolve, reject
const promise1 = new Promise((resolve, reject) => {
  let completedPromise = false;
  setTimeout(() => {
    if (completedPromise) {
      resolve("completed promise 1");
    } else {
      reject("not completed promise 1");
    }
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  let completedPromise = true;
  if (completedPromise) {
    resolve("completed promise 2");
  } else {
    reject("not completed promise 2");
  }
});

promise1
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    // if program is false or reject then catch will Work.
    console.log(err);
  });

promise2
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    // if program is false or reject then catch will Work.
    console.log(err);
  });

let b = "bye";
console.log(b);
