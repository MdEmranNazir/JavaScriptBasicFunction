function outer(){
    var a = 10;
    function inner(){
        console.log(a);
        console.log('I,am a inner function');  
    }

    console.log(inner());
    console.log('I,am a outer function');
    
}

console.log(outer());
// function add(a = 10,b = 5){
//     function sum(){
//         return a+b;
//     }
//     function sub(){
//         return a-b;
//     }
//     function mul(){
//         return a*b;
//     }
//     function div(){
//         return a/b;
//     }
//     return sum()+sub()+mul()+div();
// }
// // var result = add(10,5);
// console.log(add());
