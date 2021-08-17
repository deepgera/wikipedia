let arr =[1,2,3,4,5];
let ob={
    0: "deepak"
    ,1: "gera"
    ,7: "iam deepak"
    
}
console.log(Object.keys(ob));
console.log(Object.values(ob));
let obj={
    obj1:{
        obj11:{
            obj111:"hello"
        },
        obj12:{
            obj121:"iam"
        }
    },
    obj2:{
        obj21:{
            obj211:"deepak"
        },
        obj22:{
            obj212:"gera"
        }
    }
}
console.log(Object.values(Object.values(Object.values(obj))));
function printkeys(o){
    for(key in o){
        console.log(key);
        if(typeof(o[key])=="object"){
            printkeys(o[key]);
        }
    }
}
// var j=obj;
// while(typeof(j)=="Object"){
//     j=Object.values(j);
//     console.log(j)
// }

printkeys(obj);
