const _ = require("lodash");

/*
 * 将字符串转换为小写（并且单词之间以下划线分隔）；
 * --------------------------------------------------
 */
/* foo_bar */
console.log(_.snakeCase("FOO-BAR"));
/* foo_bar */
console.log(_.snakeCase("-FOO_bar__"));
/* foo_bar */
console.log(_.snakeCase("FooBar"));
