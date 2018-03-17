const _ = require("lodash");

/* [ [ 1, 2 ], [ true, false ], [ 'a', 'b' ] ] */
console.log(_.unzip([[1, true, "a"], [2, false, "b"]]));

/* [ [ 1, 2, 3 ], [ 'a', 'b', 'c' ] ] */
console.log(_.unzip([[1, "a"], [2, "b"], [3, "c"]]));

/* [ [ 1, 2 ], [ 'a', undefined ] ] */
console.log(_.unzip([[1, "a"], [2]]));
