const _ = require("lodash");

const ziped = _.zip([1, 2], [10, 20], [100, 200]);

/* [ [ 1, 10, 100 ], [ 2, 20, 200 ] ] */
console.log(ziped);

/* [ [ 1, 2 ], [ 10, 20 ], [ 100, 200 ] ]*/
console.log(_.unzip(ziped));

/* [ 3, 30, 300 ] */
console.log(_.unzipWith(ziped, _.add));

/* [ 2, 200, 20000 ] */
console.log(_.unzipWith(ziped, _.multiply));
