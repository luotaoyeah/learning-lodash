const _ = require("lodash");

/*
 * 检查字符串是否是以给定的字符串开头；
 * --------------------------------------------------
 */
/* true */
console.log(_.startsWith("abc", "a"));
/* false */
console.log(_.startsWith("abc", "b"));
/* true */
console.log(_.startsWith("abc", "abc"));
console.log("----------");

/*
 * 可以指定开始检查的索引；
 * --------------------------------------------------
 */
/* true */
console.log(_.startsWith("abc", "b", 1));
