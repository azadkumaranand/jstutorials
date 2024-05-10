//pop()

let name = ['azad', 'gulshan', 'suman', 'suraj', 985, true, undefined, null];

console.log(name);

name.pop();
name.pop();
name.pop();
name.pop();

console.log(name);

//push()

name.push('sanjan');

console.log(name);

//shift()
name.shift();
console.log(name);

//unshift()

name.unshift('gautam');
console.log(name);

//concat()

let arr2 = [44, 47, 85, 74, 15];

console.log(name.concat(arr2));

//copyWithin()
console.log(arr2.copyWithin(1, 2));



