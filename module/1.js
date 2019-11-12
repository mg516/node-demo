let date = new Date();

let fn = ()=>{
    console.log('打印1.js的内容！')
}

// exports.date = date;
// exports.fn = fn;

module.exports = {
    date:date,
    fn:fn
};