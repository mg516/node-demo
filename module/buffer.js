// let str = '1234567890';
let str = '你好';

let buffer = Buffer.from(str);
let bufferStr = buffer.toString();

console.log(buffer,buffer.length);
console.log(bufferStr,bufferStr.length);