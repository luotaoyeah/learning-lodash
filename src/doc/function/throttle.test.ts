import { throttle } from 'lodash';

describe('src/doc/function/throttle.test.ts', () => {
  jest.setTimeout(10000);

  /*
   * 默认配置: { leading: true, trailing: true }
   *
   * 执行过程如下:
   *   f02(0), 执行 f01(0), 开始计时, 因为 leading: true
   *   f02(1), 仍在计时, 记录参数[1]
   *   计时结束, 执行 f01(1), 开始计时, 因为 trailing: true
   *   f02(2), 仍在计时, 记录参数[2]
   *   f02(3), 仍在计时, 记录参数[3]
   *   计时结束, 执行 f01(3), 开始计时, 因为 trailing: true
   *
   * 需要注意地点: 在第一个计时周期的 trailing 执行的 f01(1) 会立即触发一个新的计时周期.
   */
  it('01', (cb) => {
    const f01 = jest.fn((value) => {
      console.log(value);
    });
    const f02 = throttle(f01, 1000, { leading: true, trailing: true });

    for (let i = 0; i <= 10; i++) {
      setTimeout(() => {
        f02(i);
        if (i === 10) {
          expect(f01).toHaveBeenNthCalledWith(1, 0);
          expect(f01).toHaveBeenNthCalledWith(2, 1);
          expect(f01).toHaveBeenNthCalledWith(3, 3);
          cb();
        }
      }, i * 600);
    }
  });

  it('02', (cb) => {
    const f01 = jest.fn();
    const f02 = throttle(f01, 1000, { leading: true, trailing: false });

    for (let i = 0; i <= 10; i++) {
      setTimeout(() => {
        f02(i);
        if (i === 10) {
          expect(f01).toHaveBeenNthCalledWith(1, 0);
          expect(f01).toHaveBeenNthCalledWith(2, 2);
          expect(f01).toHaveBeenNthCalledWith(3, 4);
          cb();
        }
      }, i * 600);
    }
  });

  /*
   * 执行过程如下:
   *   f02(0), 开始计时, 记录参数[0], 因为 leading: false
   *   f02(1), 记录参数[1]
   *   计时结束, 执行 f01(1), 开始计时
   *   f02(2), 记录参数[2]
   *   f02(3), 记录参数[3]
   *   计时结束, 执行 f01(3), 开始计时
   *   f02(4), 记录参数[4]
   *   f02(5), 记录参数[5]
   *   计时结束, 执行 f01(5), 开始计时
   */
  it('03', (cb) => {
    const f01 = jest.fn();
    const f02 = throttle(f01, 1000, { leading: false, trailing: true });

    for (let i = 0; i <= 10; i++) {
      setTimeout(() => {
        f02(i);
        if (i === 10) {
          expect(f01).toHaveBeenNthCalledWith(1, 1);
          expect(f01).toHaveBeenNthCalledWith(2, 3);
          expect(f01).toHaveBeenNthCalledWith(3, 5);
          cb();
        }
      }, i * 600);
    }
  });
});
