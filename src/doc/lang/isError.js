const _ = require("lodash");

/*
 * 接收 1 个参数：'检查对象'；
 * 判断'检查对象'是否是 Error 对象；
 * Error，EvalError，RangeError，ReferenceError，SyntaxError，TypeError，URIError；
 * --------------------------------------------------
 */

/*
 * --------------------------------------------------
 */
console.log("----------: 基本用法");

/* true */
console.log(_.isError(new Error()));
/* true */
console.log(_.isError(new EvalError()));
/* true */
console.log(_.isError(new RangeError()));
/* true */
console.log(_.isError(new ReferenceError()));
/* true */
console.log(_.isError(new SyntaxError()));
/* true */
console.log(_.isError(new TypeError()));
/* true */
console.log(_.isError(new URIError()));
/* false */
console.log(_.isError(undefined));
