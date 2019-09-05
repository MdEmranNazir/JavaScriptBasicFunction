var arr = [2,4,5,1,7,8,29];
// var newArr = [];
// for(var i = 0; i < arr.length; i++){

//     if(arr[i]%2 == 1){
//         // if(arr[i]%2 == 0){}
//         newArr.push(arr[i]);

//     }
// }
// console.log('NewArry = ' + newArr);

//..................................................................//

// var newarr = arr.filter(function(value){
//     return value % 2 == 0;
// })
// console.log(newarr);

//..................................................................//

function myfilter(arr,callback){
    var newarr = [];
    for(var i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            newarr.push(arr[i]);

        }

    }
    return newarr;
}
var myarr = myfilter(arr,function(element){
    return element % 2 == 1;


})
//  var myarr = arr.filter(function(value){
//     return value % 2 == 0;
//  })
console.log('Your Element = ' + myarr);
