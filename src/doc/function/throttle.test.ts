/* tslint:disable:no-any */
import { throttle } from 'lodash';

describe('src/doc/function/throttle/01.ts', () => {
  it('01', cb => {
    const fn01 = jest.fn();
    const fn02 = throttle(fn01, 1000, { leading: true, trailing: false });

    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        fn02(i);
        if (i === 5) {
          expect(fn01).toHaveBeenCalledTimes(3);
          expect(fn01).toHaveBeenNthCalledWith(1, 0);
          expect(fn01).toHaveBeenNthCalledWith(2, 2);
          expect(fn01).toHaveBeenNthCalledWith(3, 4);
          cb();
        }
      }, i * 600);
    }
  });

  it('02', cb => {
    const fn01 = jest.fn();
    const fn02 = throttle(fn01, 1000, { leading: false, trailing: true });

    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        fn02(i);
        if (i === 5) {
          expect(fn01).toHaveBeenCalledTimes(2);
          expect(fn01).toHaveBeenNthCalledWith(1, 1);
          expect(fn01).toHaveBeenNthCalledWith(2, 3);
          cb();
        }
      }, i * 600);
    }
  });
});
