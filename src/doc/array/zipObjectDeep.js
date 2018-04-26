const _ = require("lodash");

/*
{
    "a": {
        "b": [
            {
                "c": 1
            },
            {
                "d": 2
            }
        ]
    }
}
 */
console.log(
  JSON.stringify(_.zipObjectDeep(["a.b[0].c", "a.b[1].d"], [1, 2]), "", 4)
);
