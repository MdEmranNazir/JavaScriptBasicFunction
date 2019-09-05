
// function host(){
//     console.log('hello how are you ?');
//     return function(){
//         console.log('Iam fine');
        
//     }
// }
 
// var show = host();
// show() 






// function host(name){
    
//     return function(roll){
        
//         console.log(name + '' +roll);
        
        
//     }
    
// }

// var a = host('Md.');
// var b = host('Roll:');
//  a('Emran.');
//  b(328435);
//....................//
function host(name){
    
    function ret(roll){
         
         console.log(name + '' +roll);
         
         
     }
     return ret;
 }
 
 var a = host('Md.');
 var b = host('ROLL:');
  a('Emran');
  b(328435);
 