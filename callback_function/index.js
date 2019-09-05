// function hello(name){
//     print(name);
//     console.log('boje na re vai');
    
// }
// function print(args){
//     console.log(args);
    
// }
// hello('hello javascript');
//.................//..................
function hello(name,print){
    print(name);


}
hello('javascript',print);
hello('javascript',print);

function print(dd){
    console.log(dd);
}


//.....................//
// hello('Emran', function(name){
//     console.log('Hello,' + name);
    
// })
// hello('Emran', function(name){
//     console.log('hi how are you,' + name);
    
// })
// hello('Hamedffff', function(name){
//     console.log('length,' + name + 'is' + name.length);
    
// })
//................//
// var me = {
//     name: 'Emran',
//     age: 19,
//     emali: 'mdemrannazir@9999gmail.com'
// }
// function printMyself(person,callback){
//     console.log('person' + person.name +'('+ person.age +')');
//     if(person.age >= 18){
//         callback(person.emali);
//     }

// }
// printMyself(me, function(emali){
//     console.log("E-male sent to:" +emali);
    
// });
//...................//
// function print(data,callback1,callback2){
//     console.log('origenal data:' + data);
//     callback1(data);
//     callback2(data);
    
// }
// print('data', function(data){
//     var data = data.toUpperCase();
//     console.log('Uppercase:' + data);
    
// }, function(data){
//     var data = data.toLowerCase();
//     console.log('toLowercase:' + data);
//     console.log('length:' + data.length);
    
// });