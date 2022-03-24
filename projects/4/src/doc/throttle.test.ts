import { throttle } from 'lodash';
import { log } from '../util';

describe('throttle', () => {
    /*
     * 默认配置: { leading: true, trailing: true }
     *
     * 跟 rxjs 的 throttleTime 的工作原理是一样的.
     */
    it('01', (cb) => {
        const f01 = (value: number) => {
            log(value);
        };
        const f02 = throttle(f01, 3000, { leading: true, trailing: true });

        let i = 0;
        setInterval(() => {
            f02(i++);
        }, 2000);
    });

    it('02', (cb) => {
        const f01 = (value: number) => {
            log(value);
        };
        const f02 = throttle(f01, 3000, { leading: false, trailing: true });

        let i = 0;
        setInterval(() => {
            f02(i++);
        }, 2000);
    });

    it('03', (cb) => {
        const f01 = (value: number) => {
            log(value);
        };
        const f02 = throttle(f01, 3000, { leading: true, trailing: false });

        let i = 0;
        setInterval(() => {
            f02(i++);
        }, 2000);
    });
});
