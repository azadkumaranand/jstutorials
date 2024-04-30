// let nae = "amar";//global variable you can access from anywhere
function isPrime(a){
    let flag = true;
    if(a<=1){
        // console.log("object")
        flag = false;
    }
    for(let i=2; i<a; i++){
        console.log("i value: ", i);
        if(a%i == 0){
            flag = false;
            break;
        }
    }
    // console.log(flag);
    if(flag == true){
        console.log(a, " is a prime number");   
    }else{
        console.log(a, " is not a prime number");
    }
}
// 1 or 2
isPrime(1);




