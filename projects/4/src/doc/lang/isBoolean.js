/* eslint-disable no-new-wrappers */
const _ = require('lodash');

/*
 * 检查给定值是否是布尔值（原始类型，包装类型）；
 * --------------------------------------------------
 */
/* true */
console.log(_.isBoolean(true));
/* true */
console.log(_.isBoolean(new Boolean()));
/* true */
console.log(_.isBoolean(Boolean(0)));
