let return1 = require('./1.js');

console.log(return1.date);
return1.fn();
// console.log(global);
// console.log(global.exports);
// console.log(global.require);
// console.log(arguments);
// console.log(arguments.callee + "");

/**
 每个js文件是一个闭包，闭包的参数为：exports, require, module, __filename, __dirname


 function (exports, require, module, __filename, __dirname) {
    let return1 = require('./1.js');

    console.log(return1.date);
    return1.fn();
    // console.log(global);
    // console.log(global.exports);
    // console.log(global.require);
    // console.log(arguments);
    console.log(arguments.callee + "");
 }

 exports:向外部暴露函数内部变量和函数
 require:引入外部模块
 module:当前模块
 __filename:当前模块的绝对路径
 __dirname:当前模块所在目录的路径


*/

// console.log(module);
// console.log(module.exports);
// console.log(exports === module.exports);
// console.log(__filename);
// console.log(__dirname);