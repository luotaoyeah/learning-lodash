const _ = require("lodash");

/*
 * 移除所有 falsey 值，包括：false，0，""，null，undefined，NaN；
 * --------------------------------------------------
 */
/* [ "tom" ] */
console.log(_.compact(["tom", false, 0, "", null, undefined, NaN]));
