let fs = require('module/stream/fs');
/*
* fs
* 读文件:readFile
* 同步读:readFileSync
* 写文件:writeFile
* 同步写:writeFileSync
* 获取文件信息:stat
* 同步获取文件信息:statSync
*/
// 读文本文件-返回文本
fs.readFile('test.text','utf-8',function (err,data) {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

// 读图片文件-返回buffer二进制流
fs.readFile('resource/logo.svg',function (err,data) {
    if(err){
        console.log(err)
    }else{
        console.log(data);
        console.log(data.length);
        console.log(data.toString());
    }
});

try{
    // 同步读取
    let testData = fs.readFileSync('test.text','utf-8');
    console.log(`testData: ${testData}`);
}catch (err) {
    console.log(err);
}

{
    // 写文件
    let data = 'hello node';
    fs.writeFile('test.text',data,function (err) {
        if(err){
            console.log(err);
        }else{
            console.log('write ok');
        }
    });

    // 文件信息
    fs.stat('test.text',function (err,stat) {
        if(err){
            console.log(err);
        }else{
            console.log(`是否是文件: ${stat.isFile()}`);
            console.log('是否是目录: ' + stat.isDirectory());
            if (stat.isFile()) {
                console.log('文件大小: ' + stat.size);
                console.log('创建时间: ' + stat.birthtime);
                console.log('修改时间: ' + stat.mtime);
            }
        }
    })
    fs.stat('resource',function (err,stat) {
        if(err){
            console.log(err);
        }else{
            console.log(`是否是文件: ${stat.isFile()}`);
            console.log('是否是目录: ' + stat.isDirectory());
        }
    })

}


console.log('end');