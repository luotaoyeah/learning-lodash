const _ = require("lodash");

/* [ 2.1 ] */
console.log(_.intersectionBy([2.1, 3.2], [2.2, 4.4], Math.floor));

/* [ { x: 1 } ] */
console.log(
  _.intersectionBy([{ x: 1 }], [{ x: 1 }, { x: 2 }], _.property("x"))
);
