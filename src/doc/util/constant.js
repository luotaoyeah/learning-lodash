const _ = require("lodash");

/*
 * 接收 1 个参数：'值'；
 * 创建一个函数，函数的返回结果为'值'；
 * --------------------------------------------------
 */
const f01 = _.constant({ name: "tom" });
/* { name: 'tom' } */
console.log(f01());
/* { name: 'tom' } */
console.log(f01());
/* false */
console.log(f01() === f01);
