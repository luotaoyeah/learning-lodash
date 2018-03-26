const _ = require("lodash");

/*
 * 生成一个唯一的 ID；
 * --------------------------------------------------
 */
/* 1 */
console.log(_.uniqueId());
/* 2 */
console.log(_.uniqueId());
/* 3 */
console.log(_.uniqueId());
console.log("----------");

/*
 * 可以指定前缀；
 * --------------------------------------------------
 */

/* _tom_4 */
console.log(_.uniqueId("_tom_"));
/* _cat_5 */
console.log(_.uniqueId("_cat_"));
