const _ = require("lodash");

/*
 * 移除字符串首尾的空白（或者给定的一个或多个字符）；
 * 返回移除后的字符串；
 */

/* tom */
console.log(_.trim("   tom   "));
/* tom */
console.log(_.trim("---tom---", "-"));

/*
 * 如果第二个参数是多个字符，则只要首（尾）字符属于这些字符中的一个，都会被移除；
 * --------------------------------------------------
 */
/* tom */
console.log(_.trim("-_-tom_-_", "_-"));
