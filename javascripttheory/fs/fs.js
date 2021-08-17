const fs=require("fs");
//console.log(fs.readFileSync("a.txt","utf-8"));
console.log(fs.existsSync("a.txt"));
console.log(fs.existsSync("b.txt"));
// fs.writeFileSync("a.txt","hello iam first file");
// fs.writeFileSync("b.txt","hello iam second file");
console.log(fs.readFileSync("a.txt","utf-8"));
console.log(fs.readFileSync("b.txt","utf-8"));

let filename1=process.argv[2];
let filename2=process.argv[4];
if(fs.existsSync(filename1)&&fs.existsSync(filename2)){
    let filedata1=fs.readFileSync(filename1,"utf-8");
    let filedata2=fs.readFileSync(filename2,"utf-8");
    if(process.argv[3]=="-a"){
        console.log(filedata1+"\n"+filedata2);
    }
    else if(process.argv[3]=="-ap"){
        var filedata=filedata1+"\n"+filedata2;
        fs.writeFileSync(filename1,filedata);
        console.log(fs.readFileSync(filename1,"utf-8"));
    }
}
else{
    console.log("file does not exist");   
}
// let file1name = process.argv[2];
// let file2name = process.argv[4];

// let file1data = fs.readFileSync(file1name)
// let file2data = fs.readFileSync(file2name)
// if (process.argv[3] == "-r"){
//     console.log(file1data + "\n" + file2data)
// } else if (process.argv[3] == "-rw"){
//         file1data = file1data+"\n"+file2data
//         fs.writeFileSync(file1name,file1data)
//  }
