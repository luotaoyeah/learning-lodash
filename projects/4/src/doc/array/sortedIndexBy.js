const _ = require("lodash");

const array01 = [{ x: 1 }, { x: 2 }, { x: 3 }];

/* 1 */
console.log(_.sortedIndexBy(array01, { x: 2 }, "x"));

/* 2 */
console.log(_.sortedIndexBy(array01, { x: 3 }, "x"));
