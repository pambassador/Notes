/** 
1.定义暴露模块：
module.exports = value;
exports.xxx = value;
2.引入模块
var module = require('模块名或模块路径')
*/
"use strict"
let module1 = require('./modules/modules1');
let module2 = require('./modules/modules2');
let module3 = require('./modules/modules3');
let uniq = require('uniq');
let fs = require('fs');
//使用模块
module1.foo();
module2();
module3.foo();
module3.bar();

console.log(uniq[1,3,1,4,3]);
fs.readFile('app.js', function(errordata){
    console.log(data.toString());
})
