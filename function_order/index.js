// var array = [2,3,1,6,4,5];

// //  array.forEach(function(a){
// //      console.log(a);
     
// //  });
// function cbf(a){
//       console.log(a);
// }
// array.forEach(cbf);

function caller(){
    return function(name,age){
        return 'caller calling you' + name +  + age;
    }
}

var x = caller();
var y = x('Emran Nazir,',19);
console.log(y);
var z = x('Javascript,',2);
console.log(z);

// var a = caller()('hello',10);
// console.log(a);

