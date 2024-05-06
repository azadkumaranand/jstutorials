let str = "Azad kumar Azad";
let str2 = "Hello ";
let str3 = "Azad Kumar";

console.log(str.length);

console.log(str.slice(0, 4));
//4 index will be exclude. it means it will return from 0 to 3 index latter

// console.log(str.replace('Azad', "sumit"));

// concat() method is used to add two or more string in one

console.log(str2.concat(str3, str));

//trim()

str = "    Azad    ";
console.log(str.length);
// console.log(str.trim().length);
str2 = " Azad   Kumar ";

console.log(str2.length);
console.log(str2.trim().length);

str2 = "7481654654451457";
let newstr = str2.slice(12, 16);
console.log(newstr);
let hideCdNo = newstr.padStart(16, "X");
hideCdNo = newstr.padEnd(16, "X");
console.log(hideCdNo);

//charAt(index)

console.log(str2.charAt(0));

//split()
str = "Azad,Sumit,Ankesh,Suraj,Roshan,Amit";
let arr = str.split(",");
// let arr1 = ["Azad", 
// "Ankesh",
// "Aman", 
// 784, 
// str
// ];
// console.log(arr1[2]);

console.log(arr[5]);