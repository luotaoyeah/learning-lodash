const _ = require("lodash");

/*
 * 将字符串转换为 kebab-case（单词之间以短横线分隔）；
 * --------------------------------------------------
 */
/* foo-bar */
console.log(_.kebabCase("foo bar"));
/* foo-bar */
console.log(_.kebabCase("FOO-BAR"));
/* foo-bar */
console.log(_.kebabCase("-FOO_bar__"));
/* foo-bar */
console.log(_.kebabCase("FooBar"));
