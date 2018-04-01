const _ = require("lodash");

/*
 * 参考：http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 接收 3 个参数：'执行函数'，'延迟时间'，'配置选项'；
 * 生成一个'限流函数'（对'执行函数'的包装），在每个'延迟时间'内最多只执行一次'执行函数'；
 * --------------------------------------------------
 */

/*
 * 默认配置：{leading: true, trailing: true}
 * --------------------------------------------------
 */
console.log("----------: 基本使用");
const f01 = x => {
  console.log("f01:", x);
};
/* 1 2 3 */
for (let i = 1; i <= 3; i++) {
  f01(i);
}

const f02 = _.throttle(x => {
  console.log("f02:", x);
}, 1000);
/* 立即打印 1，1000 毫秒之后打印 3 */
for (let i = 1; i <= 3; i++) {
  f02(i);
}

/*
 * 默认配置：{leading: true, trailing: true}
 * --------------------------------------------------
 */
console.log("----------: 基本使用");
const f03 = _.throttle(
  x => {
    console.log("f03:", x);
  },
  1000,
  { leading: false, trailing: true }
);
const f04 = _.debounce(
  x => {
    console.log("f04:", x);
  },
  1000,
  { leading: false, trailing: true }
);
/* 立即打印 1，1000 毫秒之后打印 3 */
for (let i = 1; i <= 5; i++) {
  f03(i);
  f04(i);
}
