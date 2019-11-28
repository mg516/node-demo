// 引入模块
let fs = require("fs");

fs.readFile('streamWrite.txt',(err,data)=>{
    if(!err){
        console.log(data);
    }else{
        console.log(err);
    }
});