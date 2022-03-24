const _ = require("lodash");

/* [ 1.1, 2.2 ] */
console.log(_.sortedUniqBy([1.1, 1.2, 2.2, 2.3], Math.floor));
