const _ = require("lodash");

/* a */
console.log(_.nth(["a", "b", "c", "d"]));

/* c */
console.log(_.nth(["a", "b", "c", "d"], 2));

/* c */
console.log(_.nth(["a", "b", "c", "d"], -2));
