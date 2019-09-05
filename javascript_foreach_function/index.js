var array = [2,4,5,1,7,8,29];

array.forEach(function(a,b,c){
    console.log('a:' + a + 'b:' + b + 'C:' + c);
    
});

// function loop(array,callback){
//     for(var i=0; i<array.length; i++){
//         callback(array[i],i,array);
//     }
// }
// loop(array, function(element,i,array){
//     console.log('element:' + element + '==' +'index:' + i + 'array' + array);
    
// });