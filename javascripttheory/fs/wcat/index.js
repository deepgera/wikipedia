#!/usr/bin/env node
let fs=require("fs");
fs.writeFileSync("../a.txt","this is file a \n proper @@@@@");
fs.writeFileSync("../b.txt","this is file b \n perfect @$@");
// console.log(fs.readFileSync("../a.txt","utf-8"));
// console.log(fs.readFileSync("../b.txt","utf-8"));
let argument=process.argv.slice(2);
var command=[];
var filenames=[];
let secondaryarguments=[];
for(i of argument){
    if(i[0]=="-"){
        command.push(i);
    }
    else if(i[0]=="$"){
        secondaryarguments.push(i.slice(1));
    }
    else{
        filenames.push(i);
    }
}
// if(command.length==0){
//     console.log("not a command");
// }
// else{
//     for(filename of filenames){
//         let filedata=fs.readFileSync(filename,"utf-8");
//         console.log(filedata.split(" ").join(""));
//     }
// }
for(filename of filenames ){
    let filedata=fs.readFileSync(filename,"utf-8");
    for(let flag of command){
        if(flag=="-rs"){
            filedata=filedata.split(" ").join("");
        }
        if(flag=="-rn"){
            filedata=filedata.split("\n").join("");
        }
        if(flag=="-rsc"){
            for(let secondaryarg of secondaryarguments){
                filedata=filedata.split(secondaryarg).join("");
            }
        }
    }
    console.log(filedata);
}