let a = '50.25';

console.log(typeof(Number(a)), Number(a)*10);

// parseFloat();
// parseInt();

a = '10.25';

console.log(typeof(parseFloat(a)));
console.log(parseFloat(a), Number(a));
console.log(parseInt(a), Number(a));
console.log(a.toFixed(0), Number(a));//can't apply on numeric string

