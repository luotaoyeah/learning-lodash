const _ = require("lodash");

/*
 * 检查给定值是否是 Date 对象；
 * --------------------------------------------------
 */
/* true */
console.log(_.isDate(new Date()));
/* false */
console.log(_.isDate(Date.now()));
/* false */
console.log(_.isDate("2018-03-28 17:15:35"));
