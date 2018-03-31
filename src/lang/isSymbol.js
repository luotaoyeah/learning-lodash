const _ = require("lodash");

/*
 * 判断'检查的值'是否是 symbol 原始类型，或者 symbol 包装类型（对象）；
 * --------------------------------------------------
 */
/* false */
console.log(_.isSymbol("tom"));
/* true */
console.log(_.isSymbol(Symbol("tom")));
/* true */
console.log(_.isSymbol(Symbol.iterator));
