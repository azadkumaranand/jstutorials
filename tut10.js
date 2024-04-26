//Q1.

function sum (a, b){
    return a+b;
}

let result = sum(5, 6);

console.log(result);

//Q2.

function isEven(a){
    if(a%2 == 0){
        return true;
    }
    else{
        return false;
    }
    // return false;
}
result = isEven(9);
console.log(result);
// 8%2=0;
// 9%2=1;

// Q2.

function maxOfThree(a, b, c){
    if((a>b && b>c) || (a>c && c>b)){
        return a;
    }else if((b>a && a>c) || (b>c && c>a)){
        return b;
    }else if((c>a && a>b) || (c>b && b>a)){
        return c;
    }
}

result = maxOfThree(9, 17, 11);

console.log("max vlaue: ", result);


//Q3. find minimun of three