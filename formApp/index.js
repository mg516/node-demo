var server = require('./server.js');
var router = require('./router.js');
var requestHandlers = require("./requestHandlers");// 请求处理程序

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
server.start(router.route,handle);