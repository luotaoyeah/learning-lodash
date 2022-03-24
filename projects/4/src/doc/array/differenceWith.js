const _ = require("lodash");

/*
 * how to compare
 */
/* [ { x: 1, y: 2 }, { x: 2, y: 3 } ] */
console.log(
  _.differenceWith(
    [{ x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 3 }],
    [{ x: 1, y: 3 }],
    _.isEqual
  )
);

/*
 * compare by what
 */
/* [ { x: 2, y: 3 } ] */
console.log(
  _.differenceBy(
    [{ x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 3 }],
    [{ x: 1, y: 3 }],
    _.property("x")
  )
);
