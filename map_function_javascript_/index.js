var arr = [2,4,5,1,7,8,29];

// var maparr = [];
// for(var i = 0; i < arr.length; i++){
//     maparr.push(arr[i] + 2);
// }
// console.log('Maparr = ' + maparr);
//.............................................//
// var newarr = arr.map(function(value){
//     return value - 2;
// })

// console.log('newArr = ' + newarr);
//................................................//

function myfilter(arr,callback){
    var newarr = [];
    for(var i = 0; i < arr.length; i++){
        var data = callback(arr[i]);
        newarr.push(data);
        // newarr.push(callback(arr[i]));
    }
    return newarr;
}
var myarr = myfilter(arr,function(value){
    return value + (5-2*2);


})
console.log('Your Element = ' + myarr);