// 引入模块
let fs = require("module/stream/fs");

// 创建写入流
let ws = fs.createWriteStream("streamWrite.txt");

// 打开通道
ws.once('open',()=>{
    console.log('通道已打开');
});

// 关闭通道-监听
ws.once('close',()=>{
    console.log('通道已关闭');
});

ws.write('hello');
ws.write(' ');
ws.write('fs stream!');
ws.write('\n');
ws.write('yo~');

ws.end();