const _ = require("lodash");

/*
 * 接收 2 个参数：'数组'，'层数（可选，默认为 1）'
 * 递归平化'数组'指定的'层数'，返回平化后的新数组，'数组'不变；
 * --------------------------------------------------
 */

const array01 = [1, [2, [3, [4]]], 5];

/* [ 1, 2, [ 3, [ 4 ] ], 5 ] */
console.log(_.flattenDepth(array01));
/* [ 1, 2, 3, [ 4 ], 5 ] */
console.log(_.flattenDepth(array01, 2));
/* [ 1, 2, 3, 4, 5 ] */
console.log(_.flattenDepth(array01, 3));
/* [ 1, 2, 3, 4, 5 ] */
console.log(_.flattenDepth(array01, 4));
