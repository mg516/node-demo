// 载入 http 模块，并将实例化的 HTTP 赋值给变量 http
var http = require('http');
var url = require("url");

function start(route,handle){
    var server = http.createServer(function(req,res){
        // req.url:端口后面的地址
        var pathname = url.parse(req.url).pathname;
        console.log("Request 路径：" + pathname + ',' + req.url);

        route(handle,pathname);

        res.writeHead(200, {"Content-Type": "text/plain"});//发送一个HTTP状态200,HTTP头的内容类型（content-type）
        var content = route(handle, pathname);
        res.write(content);//在HTTP相应主体中发送文本
        res.end();//完成响应
    });
    server.listen(8888);

    console.log("Server has started.");
}

exports.start = start;