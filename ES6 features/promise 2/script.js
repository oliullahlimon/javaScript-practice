let display1 = document.querySelectorAll("h1")[0];

let myPromise1 = new Promise((myResolve, myReject) => {
  let x = 5;

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise1
  .then((value) => {
    display1.innerHTML = value;
  })
  .catch((error) => {
    display1.innerHTML = error;
  });

// another way
function display2(some) {
  document.querySelectorAll("h1")[1].innerHTML = some;
}

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

//Promise.then() takes two arguments, a callback for success and another for failure.
myPromise.then(
  (value) => display2(value),
  (error) => display2(error)
);
