import sumAsync, { forEach } from './util';

console

  .log(555);
/*
 *
 * create .editorconfig and define all styles
 * install eslint, at this point u can lint file but no go formatting yet
 * install prettier-eslint for a nice formatting
 * tweak ur text-editor for nice formatting
 *  */

/* @ parens a - integer
 * @ params b - integer
 * @ params call - function
 * */
const sum = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b, a * b);
  }, 2000);
};

describe('free.test.js suit', () => {
  const giveMe = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok');
    }, 8000);
  });
  it('it should resolve after 5s', async () => {
    // const mockFunc = jest.fn();
    // mockFunc.mockResolvedValue('ok');
    // const res = await mockFunc();
    // const res = await jest.fn().mockResolvedValue('ok')();
    // expect(res).toBe('ok');
    // expect(giveMe).resolves.toBe('ok');
    jest.setTimeout(8000);
    expect(await giveMe).toBe('ok');
  });
  it('should return async sum', async () => {
    // const sumAsync = jest.fn().mockResolvedValue(7);
    // const res = await sumAsync(3, 4);
    // expect(res).toBe(7);
    // expect(sumAsync).toHaveBeenCalled();
    expect(sumAsync(2, 1)).resolves.toBe(3);
  });
  it('should return sum callback', done => {
    sum(4, 6, su => {
      expect(su).toBe(10);
      done();
    });
  });
  it('should test forEach func', () => {
    const callback = jest.fn(x => x + 5);
    forEach([0, 1], callback);
    expect(callback.mock.calls.length).toBe(2);
    expect(callback.mock.calls[1][0]).toBe(1);
    expect(callback.mock.results[0].value).toBe(5);
  });
});
