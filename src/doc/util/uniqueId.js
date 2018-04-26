const _ = require("lodash");

/*
 * 生成一个唯一的 ID；
 */
console.log("\n-------------------------------------------------- 01");
/* 1 */
console.log(_.uniqueId());
/* 2 */
console.log(_.uniqueId());
/* 3 */
console.log(_.uniqueId());

/*
 * 可以指定前缀；
 */
console.log("\n-------------------------------------------------- 02");
/* _tom_4 */
console.log(_.uniqueId("_tom_"));
/* _cat_5 */
console.log(_.uniqueId("_cat_"));
