const _ = require("lodash");

/* [ [ 1, true, 'a' ], [ 2, false, 'b' ] ] */
console.log(_.zip([1, 2], [true, false], ["a", "b"]));

/* [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ] */
console.log(_.zip([1, 2, 3], ["a", "b", "c"]));

/* [ [ 1, 'a' ], [ 2, undefined ] ] */
console.log(_.zip([1, 2], ["a"]));
