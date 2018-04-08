const _ = require("lodash");

/*
 * 将每一个单词的首字母转换为大写（并且单词之间以空格分隔）；
 * --------------------------------------------------
 */
/* FOO BAR */
console.log(_.startCase("FOO-BAR"));
/* FOO Bar */
console.log(_.startCase("-FOO_bar__"));
/* Foo Bar */
console.log(_.startCase("FooBar"));
