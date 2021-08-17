//let cannot be redeclared but can be resassigned
//var can be reassigned as well as redeclared
//const can neither be declared nor be declared
var a=10;
a=20 // this will work fine;
console.log(a)
var a=30 //this willnot cause error
console.log(a)
var b=10;
b=20 // this will work fine;
console.log(b)
//var a=30 //this will cause error
console.log(b)
const c=10;
//a=20 // this will not work fine;
console.log(c)
//const a=30 //this will cause error
console.log(c)