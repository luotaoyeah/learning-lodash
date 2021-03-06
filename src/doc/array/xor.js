/**
 * 移除每个数组中都存在的元素，且过滤掉重复元素；
 * --------------------------------------------------
 */
const _ = require("lodash");

/* [ 1, 2, 3, 4 ] */
console.log(_.xor([1, 2], [3, 4]));

/* [ 1, 3 ] */
console.log(_.xor([1, 2], [2, 3]));

/*
 * 重复元素会被过滤掉；
 * --------------------------------------------------
 */
console.log("----------: unique");
console.log(_.xor([1, 2, 2, 1], [2, 3, 3, 2]));
