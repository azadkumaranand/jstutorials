let name = ['azad', 'gulshan', 'suman', 'suraj', 985, true, undefined, null, {
    name:'Azad',
    age:'32',
    profesion:'web developer'
}, ['sj', 74, 782]];

// console.log(typeof(name));
console.log(typeof(name[2]));
console.log(name[8].profesion);
console.log(name[9][2]);

let obj = {
    name:'Azad',
    age:'32',
    profesion:'web developer',
    myfunc: function(){
        console.log("this is the function fromm object");
        return 45;
    }
}
obj.myfunc();
// console.log(obj.myfunc());

//array method and properties
//length 
console.log(name.length);
// split()
let str = 'azad,gulshan,sultan,myank,rakesh,ramesh,suresh';

// let newarr = str.split('g');
let newarr = str.split(',');
console.log(newarr[2]);

let newstr = newarr.join('*');
console.log(newstr);