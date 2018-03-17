const _ = require("lodash");

const array01 = ["a", "b"];
const array02 = [1, 2];

/* [ [ 'a', 1 ], [ 'b', 2 ] ] */
console.log(_.zip(array01, array02));

/* [ 'a1', 'b2' ] */
console.log(_.zipWith(array01, array02, _.add));

/* { a: 1, b: 2 } */
console.log(_.zipObject(array01, array02));
