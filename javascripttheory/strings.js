let firstname="deepak"
let lastname="gera"
console.log(firstname+" "+lastname);
let fullname=`${firstname} ${lastname} ${7+3/0}`
console.log(fullname)
console.log( fullname.length);
console.log(fullname.slice(0,11));
console.log(fullname.substring(0,5));
console.log(fullname.substr(0,7));
console.log(lastname.toUpperCase());
console.log(lastname.toLocaleUpperCase());
for(let i=0;i<fullname.length;i++){
    process.stdout.write(fullname[i]);
}
let str="jfuuirfbibfiuvjdfbjkldsvfxz"
let count=0;
for(i=0;i<str.length;i++){
    if(str[i]=='b'){
        count++;
    }
}
console.log(count);
let hs="23746643986754984"
let ans=0;
for(let i=0;i<hs.length;i++){
    ans=parseInt(hs[i])+ans;
}
console.log(ans);
let uo="1Aa2";
 let nas=0;
for( i=0;i<uo.length;i++){
    if((uo[i]>='a'&&uo<='z')||(uo[i]>='A'&&uo[i]<='Z'))
        nas+=uo.charCodeAt(i);
    else
        nas+=parseInt(uo[i]);
    
}
console.log(nas);
i=0;j=firstname.length-1;
let newname="";
for(i=fullname.length-1;i>=0;i--){
    newname+=fullname[i]
}
console.log(newname);
let reverse="";
let ep=newname.length;
for(i=newname.length-1;i>=0;i--){
    if(newname[i]==" "){
        reverse+=fullname.substring(i+1,ep);
        ep=i;
    }
    else if(i==0){
        reverse+=fullname.substring(i,ep);
    }
}
console.log(reverse);
//palindrome
let p="naman";
i=0;
let bol=true;
let j=p.length-1;
while(i<j){
    if(p[i]!=p[j]){
        bol=false;
        break; 
    }
    i++;
    j--;
}
console.log(bol);