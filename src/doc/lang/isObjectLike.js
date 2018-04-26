const _ = require("lodash");

/*
 * 接收 1 个参数：'检查的值'；
 * 如果'检查的值'不是 null，且 typeof '检查的值' 运算结果为 'object'，则返回 true；否则返回 false；
 * --------------------------------------------------
 */

/*
 * 虽然 (typeof null) 运算结果为 'object'，但是返回结果为 false；
 * --------------------------------------------------
 */
console.log('----------: typeof null = "object"');
/* object : false */
console.log(typeof null, ":", _.isObjectLike(null));
/* undefined : false */
console.log(typeof undefined, ":", _.isObjectLike(undefined));

const f01 = () => {};
/* function : false */
console.log(typeof f01, ":", _.isObjectLike(f01));

const obj01 = {};
/* object : true */
console.log(typeof obj01, ":", _.isObjectLike(obj01));

const array01 = [];
/* object : true */
console.log(typeof array01, ":", _.isObjectLike(array01));

const date01 = new Date();
/* object : true */
console.log(typeof date01, ":", _.isObjectLike(date01));

const regexp01 = new RegExp();
/* object : true */
console.log(typeof regexp01, ":", _.isObjectLike(regexp01));
