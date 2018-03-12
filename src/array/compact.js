const _ = require("lodash");

/* [ "tom" ] */
console.log(_.compact(["tom", false, 0, "", null, undefined, NaN]));
