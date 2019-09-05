// Function Javascript
// Frist Class Function

function sayName(name){
    return 'hello,' + name;

}

// 1.function can be stored in variable
var hello = sayName;
// var fun = sayName('Emran');
//  console.log(hello);
//  console.log(fun);

// var fun = hello('Emran');
// console.log(fun);
// console.log(hello('nazir'));

var anotherhello = hello;
console.log(anotherhello('nazir'));

// 2.A function can be stored in an Array
var Array = [1,2,3,4,anotherhello];
Array.push(sayName);
console.log(Array);

// 3.A function can be stored as an Object filed or property
var person = {
    name: 'Emran',
    sayName: hello,
    print: function(){
        console.log('hi');
        
    }
}
console.log(person);
// 4.we can create function as needed
var sum = 10 + (function(){return 50})();
console.log(sum);
//5.we can pass function as an argument
function wow(name,fun){
    return fun(name);
}
var result = wow('Emran', sayName);
console.log(result);
// 5.we can return function from another function
function base(b){
    return function(n){
        var result = 1;
        for (var i=0; i<b; i++){
            result *= n;
        }
        return result;
    }
}

// var power = base(2);
// var result = power(5);

var result = base(5)(2);
console.log(result);
// Todays Topics



