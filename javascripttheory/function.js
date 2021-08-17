function add(a,b){
    return a+b;
}
console.log(add("1",2));
function addnum(a,b){
    return parseInt(a)+parseInt(b);
}
console.log(addnum("1",2));
const arr=[1,2,3,4,5];
function myforeach(array){
    for(let i=0;i<arr.length;i++){
        callback(arr[i],i,array);
    }
}
myforeach(arr);
function callback(value,index,array){
    console.log(value,index,array);
}