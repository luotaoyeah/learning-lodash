const _ = require("lodash");

/*
 * 是否小于；
 * --------------------------------------------------
 */
/* true */
console.log(_.lt(1, 2));
/* false */
console.log(_.lt(2, 2));
/* true */
console.log(_.lt(2, 1));
