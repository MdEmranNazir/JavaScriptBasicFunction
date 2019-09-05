var arr = [6,2,5,9,7,3,4];

// var sum = 0;
// for(var i = 0; i < arr.length; i++){
//     sum += arr[i];

// }
// console.log('Sum = '+sum);

var result = arr.reduce(function(a,b){
    return a+b;
})
console.log('Result = '+result);
