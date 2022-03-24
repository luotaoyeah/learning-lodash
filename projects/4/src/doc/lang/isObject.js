/* eslint-disable no-new-wrappers,no-new-func */
const _ = require('lodash');

/*
 * 接收 1 个参数：'检查的值'；
 * 判断'检查的值'是否是对象类型（而不是原始类型）；
 * --------------------------------------------------
 */

/*
 * 对于原始数据类型（string，number，boolean，undefined）以及 null，Number.NaN，返回 false；
 * --------------------------------------------------
 */
console.log('----------: primitive types');
console.log(_.isObject('tom'));
console.log(_.isObject(18));
console.log(_.isObject(true));
console.log(_.isObject(undefined));
console.log(_.isObject(null));
console.log(_.isObject(Number.NaN));

/*
 * 对于原始类型的包装类型（string，number，boolean），返回 true；
 * --------------------------------------------------
 */
console.log('----------: primitive wrappers');
console.log(_.isObject(new String('tom')));
console.log(_.isObject(new Number(18)));
console.log(_.isObject(new Boolean(true)));

/*
 * 对于原生对象类型（包括数组（Array），日期（Date），正则表达式（RegExp），函数（Function）），返回 true；
 * --------------------------------------------------
 */
console.log('----------: object types');
console.log(_.isObject([]));
console.log(_.isObject({}));
console.log(_.isObject(() => {}));
console.log(_.isObject(new Array()));
console.log(_.isObject(new Date()));
console.log(_.isObject(new RegExp(/abc/)));
console.log(_.isObject(new Function()));
