var arr = [30,66,87,49,6,23,90,10];
var newarr = arr.sort(function(a,b){
    return a-b; 
});
console.log('newarr'+newarr);

// var people = [
//     {name: 'Emran', age: '19'},
//     {name: 'nazir', age: '23'},
//     {name: 'AL Rafi Emon', age: '25'},
//     {name: 'Rx Azim', age: '21'},
//     {name: 'MD.EmranNazir', age: '18'},
//     {name: 'Md Ontho Vodai', age: '29'}
// ]
//  people.sort(function(a,b){
//     return a.age - b.age;
// //     // return b.age - a.age;
// //     return b.name - a.name;
// })
// console.log(people);
// people.sort(function(a,b){
//     if(a.name > b.name){
//         return 1;
//     }else if(a.mame < b.name){
//         return -1;
//     }else{
//         return 0;
//     }
// })
// console.log(people);
