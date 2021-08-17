function frames(a,b){
    return a*b*60;
}
console.log(frame(10,25));
function addup(n){
    if(n==1){
        return 1;
    }
    return n+addup(n-1);
}
console.log(addup(4));
function binary(a){
    if(a==0){
        return "0";
    }
    var str="";
    while(a>0){
        var rem=a%2;
        a=parseInt(a/2);
        str=str+rem;
    }
    var newString="";
    for(var i=str.length-1;i>=0;i--){
        if(str[i]!=NaN)
            newString+=str[i];
    }
    return newString;
}
console.log(binary(10));
 function tuckIn(a,b){
    let temp=[];
    temp[0]=a[0];
    temp.push(...b);
    temp.push(a[a.length-1]);
    console.log(temp);
 }
 tuckIn([[1,10],[2,9]],[[5,7]]);
 function countTrue(a){
    var count=0;
    a.forEach(element => {
        if(element==true){
            count++;
        }
    });
    return count;
    
 }
console.log(countTrue([true,true,false,true]));
function arrayOfMultiples(a,b){
    let arr=[];
    for(var i=1;i<=b;i++){
        arr.push(parseInt(a*i));
    }
    return arr;
}
console.log(arrayOfMultiples(5,8));
function getLength(a){
    let count=0;
    a.forEach(ele=>{
        if(ele.length!=undefined){
            count+=getLength(ele);    
        }
        else{
            count++;
        }
    })
    return count;
}
console.log(getLength([1,[2,3,[6,7,[8,9,10]]]]));
function numInstr(a){
    let temp=[];
    a.forEach(ele=>{
        if(ele.length>0){
            for(let i=0;i<ele.length;i++){
                if(ele[i]>="1"&&ele[i]<="9"){
                    temp.push(ele);
                    break;
                }
            }
        }
    })
    return temp;;
}
console.log(numInstr(["1a","a","c","65v","d"]));
function missing(a,b){
    // a=a.filter(
    //     x => !b.includes(x)
    // )
    // console.log(a);
    var map={};
    var map2={};
    for(let i=0;i<a.length;i++){
        if(!map[a[i]])
            map[a[i]] = 0;
        ++map[a[i]];
    }
    for(let i=0;i<b.length;i++){
        if(!map2[b[i]])
            map2[b[i]] = 0;
        ++map2[b[i]];
    }
    let temp=[];
    for(let i=0;i<b.length;i++){
        if(map[b[i]]-map2[b[i]]>0)
            temp.push(b[i]);
    }
    a.filter((x)=>{
        if(!b.includes(x)){
            temp.push(x);
        }})
    //console.log(temp);
    return temp;
}
console.log(missing([1,3,2,2,"hello",true],[1,2,"hello"]));
