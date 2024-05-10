let name = ['azad', 'gulshan', 'suman', 'suraj', 985, true, undefined, null];

//splice(index, no_of_element_delete, "add element")

//splice() method change in original array
name.splice(2, 0, 'ramesh', 'rosushan');

//toSpliced() method return a new array
let newarr = name.toSpliced(2, 0, 'rawan', 'ram');

console.log(newarr);
//spread opeartaor(...)
console.log([...name, ...newarr]);

//slice();