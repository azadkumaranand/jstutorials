// √[s × (s – a) × (s – b) × (s – c)]

//s=(a+b+c)/2

let a = 5;
let b = 6;
let c = 7;

let s = (a+b+c)/2;

let area = Math.sqrt((s*(s-a)*(s-b)*(s-c)));
            //9*4*3*2
console.log(area);