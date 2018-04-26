const _ = require("lodash");

/*
 * 接收 3 个参数：'集合'，'值'，'开始索引（可选）'；
 * 检查'值'是否在'集合'中；
 * --------------------------------------------------
 */

/*
 * 如果'集合'是数组，则使用 SameValueZero 算法判断'值'是否是数组中的元素；
 * --------------------------------------------------
 */
console.log("----------: array");
const array01 = [1, 2, 3, 4, 5];
/* true */
console.log(_.includes(array01, 3));
/* false */
console.log(_.includes(array01, "tom"));

/*
 * 如果'集合'是字符串，则判断'值'是否是'集合'的子串；
 * --------------------------------------------------
 */
console.log("----------: string");
const str01 = "tomcat";
/* true */
console.log(_.includes(str01, "tom"));
/* false */
console.log(_.includes(str01, "foo"));

/*
 * 如果指定了'开始索引'，则从'开始索引'开始查找；
 * --------------------------------------------------
 */
console.log("----------: fromIndex");

const str02 = "abcde";
/* true */
console.log(_.includes(str02, "a"));
/* false */
console.log(_.includes(str02, "a", 1));
