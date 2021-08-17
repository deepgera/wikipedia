let a=new Array();
a=["kol",1,4,5,false];
//console.log(a);
//console.log(a.join("/"));
//let string="opapipupe"
//console.log(string.split("p"));
let arr=[];
arr=["d","e","e","p","a","k"]
//console.log(arr.join("."))
//arr.concat(a);
// for (let i of arr){
//     console.log(i);
// }
// for(let i in arr){
//     console.log(i);
// }
//map method -> array  har element chnage krna ho y fetch krn 
arr=arr.map(function(value){
    return value+"h";
});
console.log(arr);
a.splice(0,1);  //splice ddeletes inplace but slice does not 
console.log(a);
let num =[3,6,32,4,5,7,6,78,89,0];
//num.map(function(value,index){
//     if(value%2!=0){
//         num.splice(index,1);
//     }
// })

num=num.filter(function(value){
    // if(value%2==1){
    //     return false;
    // }
    // else{
    //     return true;
    // }
    return value%2==0;
})
//console.log(num);
console.log(num.sort(function(a,b){

     return a-b;
 
})
);
console.log(num);
let person={
    name:"deepak",
    index:0,
    age :22

}
console.log(person["index"]);
console.log(person.age);