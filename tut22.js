let arr = [14, 44, 64, 74, 24, 34, 54];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
}

let name = ["zaid", "suman", "aganesh", "azad", "barshat"];
// console.log(name.sort());
console.log(arr.sort(function (a,b) {
    return b-a;
}));

console.log(name.reverse());

//foreach()

let newarr = name.forEach(function(item, index){
    // console.log(item,index);
});
// console.log(newarr);

//map()
newarr = name.map(function(item, index){
    // console.log(item);
    return 85;
})

newarr = arr.map(function(a, b){
    return a*2;
})

//filter()
newarr = arr.filter(function(item, index){
    // console.log(item);
    return item>50;
})

newarr = name.filter(function(item, index){
    return item.startsWith('z');
});

console.log(newarr);



// 
