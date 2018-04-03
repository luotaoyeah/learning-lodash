const _ = require("lodash");

/* [ 1.1 ] */
console.log(_.differenceBy([1.1, 2.2], [2.3, 3.4], Math.floor));

/* [ 1 ] */
console.log(_.differenceBy([1, 2], [-2, -3], Math.abs));

/* [ { x: 1 } ] */
console.log(_.differenceBy([{ x: 1 }, { x: 2 }], [{ x: 2 }], "x"));
console.log(_.differenceBy([{ x: 1 }, { x: 2 }], [{ x: 2 }], _.property("x")));
