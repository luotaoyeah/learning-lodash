/* eslint-disable no-new-func */
const _ = require('lodash');

/*
 * 检查给定值是否是 Function 对象；
 * --------------------------------------------------
 */

/* true */
console.log(_.isFunction(_));
/* true */
console.log(_.isFunction(new Function()));
/* true */
console.log(_.isFunction(() => {}));
/* true */
console.log(_.isFunction(Date));
/* true */
console.log(_.isFunction(_.property('name')));
/* false */
console.log(_.isFunction(/abc/));
