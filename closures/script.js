function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
// name = "limon"  // it will print limon cause value of name has been changed
  return displayName;
/* if we return displayName then we have to put its parent init function to a variable (w) to get the value of x function
and we have to call the variable (w) as a function  */
}
let w = init();
w()


function returnFunc () {
const x = () => {
    let a = 1
    console.log(a)
    const y = () => {
        // let a = 2
        console.log(a)
        const z = () => {
            // let a = 3
            console.log(a)
        }
        a = 5 // z will get this value from its lexical parent y
        z()
    }
    a = 4 // value of a is changed to 4 and this value is applied for y and z not for x cause x has its own value 1
    y()
}
x()
}
returnFunc()
