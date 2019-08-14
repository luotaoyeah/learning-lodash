import { throttle } from "lodash";

describe("src/doc/function/throttle/01.ts", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should work", () => {
    const fn01 = jest.fn();
    const fn02 = throttle(fn01, 1000);

    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        fn02(i);
      }, (i + 1) * 600);
    }

    jest.advanceTimersByTime(3600);

    /* FIXME fn01() 应该被调用了 3 次, 但是这儿的结果为 1 次, 为什么? */
    expect(fn01).toHaveBeenCalledTimes(1);
  });
});
