let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 1");
  }, 2000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("value 2")
    reject("rejected"); //try resolve and reject one by one
  }, 1000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 3");
  }, 3000);
});

p1.then((value) => {
  console.log(value);
});

p2.then((value) => {
  console.log(value);
});

p3.then((value) => {
  console.log(value);
});

// try all the methods below one by one for understanding
let promiseAll = Promise.all([p1, p2, p3]);
promiseAll.then((value) => {
  console.log(value);
});

let promiseAllSettled = Promise.allSettled([p1, p2, p3]);
promiseAllSettled.then((value) => {
  console.log(value);
});

let promiseRace = Promise.race([p1, p2, p3]);
promiseRace.then((value) => {
  console.log(value);
});

let promiseAny = Promise.any([p1, p2, p3]);
promiseAny.then((value) => {
  console.log(value);
});

let promiseResolve = Promise.resolve(4);
promiseResolve.then((value) => {
  console.log(value);
});

let promiseReject = Promise.reject(new Error("Hey"));
promiseReject.then((value) => {
  console.log(value);
});
