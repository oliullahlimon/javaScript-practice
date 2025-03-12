let date = new Date();
console.log(date);

let year = date.getFullYear();
console.log(year);

console.log(date.toDateString());

console.log(date.getDate());

let day = date.getDay();
console.log(day);

console.log(date.toLocaleString());

console.log(date.toString());

let localeTime = date.toLocaleTimeString();
console.log(localeTime);

console.log(date.toLocaleDateString());

console.log(date.toISOString());
console.log(date.toJSON());

let timeStamp = Date.now();
console.log(timeStamp);
console.log(new Date(timeStamp));
console.log(date.getTime());
