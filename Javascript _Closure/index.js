// var name = 'Emran Nazir';
// function valu(){
//     console.log('Hello.' + name);
    
// }
// console.dir(valu);

// valu()

//...................//

function data(age){
    return function(roll){
        console.log('Your Data is:' + age + ' ' + roll);
        
    }

}
var value = data('Age:'+19)('Roll:' + 328435);
