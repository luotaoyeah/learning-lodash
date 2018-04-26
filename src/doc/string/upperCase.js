const _ = require("lodash");

/*
 * 将字符串转换为大写（并且单词之间以空格分隔）；
 * --------------------------------------------------
 */
/* FOO BAR */
console.log(_.upperCase("FOO-BAR"));
/* FOO BAR */
console.log(_.upperCase("-FOO_bar__"));
/* FOO BAR */
console.log(_.upperCase("FooBar"));
