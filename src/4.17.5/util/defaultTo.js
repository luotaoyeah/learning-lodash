const _ = require("lodash");

/*
 * 接收 2 个参数：'值'，'默认值'；
 * 如果'值'为 NaN，null，undefined，则返回'默认值'，否则返回'值'；
 * --------------------------------------------------
 */
/* cat */
console.log(_.defaultTo("cat", "tom"));
/* tom */
console.log(_.defaultTo(Number.NaN, "tom"));
/* tom */
console.log(_.defaultTo(null, "tom"));
/* tom */
console.log(_.defaultTo(undefined, "tom"));
