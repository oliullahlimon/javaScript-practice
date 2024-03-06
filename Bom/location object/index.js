console.clear();

console.log(location.href);

console.log(location.protocol);

console.log(location.hostname);

console.log(location.port);

console.log(location.pathname);


let locationDiv = document.querySelector(".location-div");

let p1 = locationDiv.children[0];
p1.innerHTML = location.href;

let p2 = locationDiv.children[1];
p2.innerText = location.protocol;

let p3 = locationDiv.children[2];
p3.textContent = location.hostname;

let p4 = locationDiv.children[3];
p4.innerHTML = location.port;

let p5 = locationDiv.children[4];
p5.textContent = location.pathname;


let button = document.querySelector("button");

button.addEventListener("click", function(){
    location.assign("https://google.com");
})