const _ = require("lodash");

/* [[1],[2],[3]] */
console.log(_.chunk([1, 2, 3]));

/* [[1, 2], [3]] */
console.log(_.chunk([1, 2, 3], 2));
