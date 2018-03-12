const _ = require("lodash");

const users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true }
];

/* 1 */
console.log(_.findIndex(users, item => item.user === "fred"));

/* 1 */
console.log(_.findIndex(users, { user: "fred", active: false }));
console.log(_.findIndex(users, _.matches({ user: "fred", active: false })));

/* 1 */
console.log(_.findIndex(users, ["user", "fred"]));
console.log(_.findIndex(users, _.matchesProperty("user", "fred")));

/* 2 */
console.log(_.findIndex(users, "active"));
console.log(_.findIndex(users, _.property("active")));

/* -1 */
console.log(_.findIndex(users, "other"));
