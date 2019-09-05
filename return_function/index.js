// function name(fristname,listname,gender){
//     if(gender === 'male'){
//         var output = 'Mr. ' + fristname + ' ' + listname;
//         return output;
//     }
//     else if(gender === 'female'){
//         var output = 'Ms. ' + fristname + ' ' + listname;
//         return output;
//     }
// }
// var fullname = name('Md','Emran Hamed','male');
// console.log(fullname);
// var fullname = name('umme','Megna','female');
// console.log(fullname);
function example(){
    return{
        name:'Emran',
        skile: ['PHP,java,javascript runing'],
        print: function(){
            console.log(this.name,this.skile);
            
        }
    }
}


var obj = example();
obj.print();