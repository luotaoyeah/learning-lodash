const _ = require("lodash");

/*
 * 接收 1 个参数：'检查的值'；
 * 判断'检查的值'是否是对象类型（而不是原始类型）；
 * --------------------------------------------------
 */

/*
 * 对于原始数据类型（string，number，boolean，undefined）以及 null，Number.NaN，返回 false；
 * --------------------------------------------------
 */
console.log("----------: primitive types");
console.log(_.isObject("tom"));
console.log(_.isObject(18));
console.log(_.isObject(true));
console.log(_.isObject(undefined));
console.log(_.isObject(null));
console.log(_.isObject(Number.NaN));

/*
 * 对于原始对象类型（包括日期，正则表达式，function，string 包装类型，number 包装类型，boolean 包装类型）返回 true；
 * --------------------------------------------------
 */
console.log("----------: object types");
console.log(_.isObject([]));
console.log(_.isObject({}));
console.log(_.isObject(() => {}));
console.log(_.isObject(new Date()));
console.log(_.isObject(new RegExp(/abc/)));
console.log(_.isObject(new Function()));
console.log(_.isObject(new String("tom")));
console.log(_.isObject(new Boolean(true)));
console.log(_.isObject(new Number(true)));
