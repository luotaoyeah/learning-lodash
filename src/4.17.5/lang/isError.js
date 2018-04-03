const _ = require("lodash");

/*
 * 接收 1 个参数：'检查对象'；
 * 判断'检查对象'是否是 Error 对象；
 * Error，EvalError，RangeError，ReferenceError，SyntaxError，TypeError，URIError；
 * --------------------------------------------------
 */

/*
 * 如果回调函数返回 undefined，则忽略比较规则，由方法自己进行比较；
 * --------------------------------------------------
 */
console.log("----------: isError");

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
