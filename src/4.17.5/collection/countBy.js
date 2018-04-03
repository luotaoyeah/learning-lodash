const _ = require("lodash");

/* { '1': 3, '2': 3 } */
console.log(_.countBy([1.1, 1.2, 1.3, 2.1, 2.2, 2.3], Math.floor));

/* { '3': 2, '5': 1 } */
console.log(_.countBy(["one", "two", "three"], _.property("length")));
