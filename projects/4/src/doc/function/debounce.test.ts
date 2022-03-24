import { debounce } from 'lodash';

describe('src/doc/function/debounce.test.ts', () => {
    /*
     * 默认配置: { leading: false, trailing: true }
     *
     * 执行过程如下:
     *   f02(0), 记录参数[0], 开始计时
     *   f02(1), 记录参数[1], 开始计时
     *   f02(2), 记录参数[2], 开始计时
     *   计时结束, 执行 f01(2)
     *   f02(3), 记录参数[3], 开始计时
     *   f02(4), 记录参数[4], 开始计时
     *   f02(5), 记录参数[5], 开始计时
     *   计时结束, 执行 f01(5)
     *   f02(6), 记录参数[6], 开始计时
     *   f02(7), 记录参数[7], 开始计时
     *   f02(8), 记录参数[8], 开始计时
     */
    it('01', (cb) => {
        const f01 = jest.fn((value) => {
            console.log(value);
        });
        const f02 = debounce(f01, 1000, { leading: false, trailing: true });

        setTimeout(() => {
            f02(0);
            setTimeout(() => {
                f02(1);
                setTimeout(() => {
                    f02(2);
                    setTimeout(() => {
                        f02(3);
                        setTimeout(() => {
                            f02(4);
                            setTimeout(() => {
                                f02(5);
                                setTimeout(() => {
                                    f02(6);
                                    setTimeout(() => {
                                        f02(7);
                                        setTimeout(() => {
                                            f02(8);

                                            expect(f01).toHaveBeenNthCalledWith(1, 2);
                                            expect(f01).toHaveBeenNthCalledWith(2, 5);

                                            cb();
                                        }, 600);
                                    }, 600);
                                }, 1200);
                            }, 600);
                        }, 600);
                    }, 1200);
                }, 600);
            }, 600);
        }, 600);
    });

    /*
     * 执行过程如下:
     *   f02(0), 执行 f01(0), 开始计时
     *   f02(1), 记录参数[1], 开始计时
     *   f02(2), 记录参数[2], 开始计时
     *   计时结束
     *   f02(3), 执行 f01(3), 开始计时
     *   f02(4), 记录参数[4], 开始计时
     *   f02(5), 记录参数[5], 开始计时
     *   计时结束
     *   f02(6), 执行 f01(6), 开始计时
     *   f02(7), 记录参数[7], 开始计时
     *   f02(8), 记录参数[8], 开始计时
     */
    it('02', (cb) => {
        const f01 = jest.fn((value) => {
            console.log(value);
        });
        const f02 = debounce(f01, 1000, { leading: true, trailing: false });

        setTimeout(() => {
            f02(0);
            setTimeout(() => {
                f02(1);
                setTimeout(() => {
                    f02(2);
                    setTimeout(() => {
                        f02(3);
                        setTimeout(() => {
                            f02(4);
                            setTimeout(() => {
                                f02(5);
                                setTimeout(() => {
                                    f02(6);
                                    setTimeout(() => {
                                        f02(7);
                                        setTimeout(() => {
                                            f02(8);

                                            expect(f01).toHaveBeenNthCalledWith(1, 0);
                                            expect(f01).toHaveBeenNthCalledWith(2, 3);
                                            expect(f01).toHaveBeenNthCalledWith(3, 6);

                                            cb();
                                        }, 600);
                                    }, 600);
                                }, 1200);
                            }, 600);
                        }, 600);
                    }, 1200);
                }, 600);
            }, 600);
        }, 600);
    });

    /*
     * 执行过程如下:
     *   f02(0), 执行 f01(0), 开始计时
     *   f02(1), 记录参数[1], 开始计时
     *   f02(2), 记录参数[2], 开始计时
     *   计时结束, 执行 f02(2)
     *   f02(3), 执行 f01(3), 开始计时
     *   f02(4), 记录参数[4], 开始计时
     *   f02(5), 记录参数[5], 开始计时
     *   计时结束, 执行 f02(5)
     *   f02(6), 执行 f01(6), 开始计时
     *   f02(7), 记录参数[7], 开始计时
     *   f02(8), 记录参数[8], 开始计时
     */
    it('03', (cb) => {
        const f01 = jest.fn((value) => {
            console.log(value);
        });
        const f02 = debounce(f01, 1000, { leading: true, trailing: true });

        setTimeout(() => {
            f02(0);
            setTimeout(() => {
                f02(1);
                setTimeout(() => {
                    f02(2);
                    setTimeout(() => {
                        f02(3);
                        setTimeout(() => {
                            f02(4);
                            setTimeout(() => {
                                f02(5);
                                setTimeout(() => {
                                    f02(6);
                                    setTimeout(() => {
                                        f02(7);
                                        setTimeout(() => {
                                            f02(8);

                                            expect(f01).toHaveBeenNthCalledWith(1, 0);
                                            expect(f01).toHaveBeenNthCalledWith(2, 2);
                                            expect(f01).toHaveBeenNthCalledWith(3, 3);
                                            expect(f01).toHaveBeenNthCalledWith(4, 5);
                                            expect(f01).toHaveBeenNthCalledWith(5, 6);

                                            cb();
                                        }, 600);
                                    }, 600);
                                }, 1200);
                            }, 600);
                        }, 600);
                    }, 1200);
                }, 600);
            }, 600);
        }, 600);
    });
});
