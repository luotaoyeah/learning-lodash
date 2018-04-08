const _ = require("lodash");

/*
 * 将字符串转换为 kebab-case；
 * --------------------------------------------------
 */
/* fooBar */
console.log(_.camelCase("foo bar"));
/* fooBar */
console.log(_.camelCase("FOO-BAR"));
/* fooBar */
console.log(_.camelCase("-FOO_bar__"));
/* fooBar */
console.log(_.camelCase("FooBar"));
