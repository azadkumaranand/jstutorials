let x = true;
let a = false;
let y = true;
let b = false;

let result = x || y;//true;
result = a || x; //true;
result = y || x; //true;
result = x && a; //false
result = x && y; //true

result = !x;//false
result = !y;//false
result = !a;//true

console.log(result);