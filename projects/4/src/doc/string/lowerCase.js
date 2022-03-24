const _ = require("lodash");

/*
 * 将字符串转换为小写（并且以空格分隔）；
 * --------------------------------------------------
 */
/* foo bar */
console.log(_.lowerCase("FOO-BAR"));
/* foo bar */
console.log(_.lowerCase("-FOO_bar__"));
/* foo bar */
console.log(_.lowerCase("FooBar"));
