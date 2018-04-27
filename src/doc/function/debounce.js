const _ = require("lodash");

/*
 * 参考：http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 接收 3 个参数：'执行函数'，'延迟时间'，'配置选项'；
 * 生成一个'去抖函数'（对'执行函数'的包装），延迟执行'执行函数'直到上一次执行'执行函数'已经过去了'延迟时间'毫秒；
 */
console.log("\n-------------------------------------------------- 01");
const f01 = x => {
  console.log("f01:", x);
};
/* 1 2 3 */
for (let i = 1; i <= 3; i++) {
  f01(i);
}

const f02 = _.debounce(x => {
  console.log("f02:", x);
}, 1000);
/* 1000 毫秒之后打印 3 */
for (let i = 1; i <= 3; i++) {
  f02(i);
}

/*
 * 默认配置 { leading: false, trailing: true}，
 *   即在'延迟时间'之后，执行这段时间（上一次执行到现在）内的最后一次调用；
 * 如果配置 { leading: true, trailing: false}，
 *   即在'延迟时间'之前，执行这段时间（现在到下一次执行）内的第一次调用；
 */
console.log("\n-------------------------------------------------- 02");
const f03 = _.debounce(x => {
  console.log("f03:", x);
}, 1000);
const f04 = _.debounce(
  x => {
    console.log("f04:", x);
  },
  1000,
  { leading: true, trailing: false }
);
for (let i = 1; i <= 3; i++) {
  /* 1000 毫秒之后打印 3 */
  f03(i);
  /* 立即打印 1 */
  f04(i);
}

/*
 * 可以使用 cancel 方法，取消延迟执行的'执行方法'的执行；
 */
console.log("\n-------------------------------------------------- 03");
const f05 = _.debounce(x => {
  console.log("f05:", x);
}, 1000);
const f06 = _.debounce(
  x => {
    console.log("f06:", x);
  },
  1000,
  { leading: true, trailing: false }
);

for (let i = 1; i <= 3; i++) {
  /* 永远不会执行 */
  f05(i);
  f05.cancel();
  /* 依次打印 1 2 3 */
  f06(i);
  f06.cancel();
}

/*
 * 可以使用 flush 方法，立即执行延迟执行的'执行方法'；
 */
console.log("\n-------------------------------------------------- 04");
const f07 = _.debounce(x => {
  console.log("f07:", x);
}, 1000);
const f08 = _.debounce(
  x => {
    console.log("f08:", x);
  },
  1000,
  { leading: true, trailing: false }
);

for (let i = 1; i <= 3; i++) {
  /* 依次打印 1 2 3 */
  f07(i);
  f07.flush();
  /* 1 */
  /* TODO 为什么只打印 1 */
  f08(i);
  f08.flush();
}

/*
 * leading 和 trailing 同时设置为 true；
 */
console.log("\n-------------------------------------------------- 05");
const f09 = _.debounce(
  x => {
    console.log("f09:", x);
  },
  1000,
  { leading: true, trailing: true }
);

/* 1 3 */
for (let i = 1; i <= 3; i++) {
  f09(i);
}
