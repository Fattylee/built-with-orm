// import util from './file';
// import users from './module-user';
import { sum } from './filez';

const complex = require('./file');
// const math = require('./filez');

// const { mul } = require('./file');

// const { mul } = util;
it('mock all', () => {
  const mockFunc = jest.fn();
  // mockFunc.mockReturnValue('hello world');
  // console.log('mockFunc', mockFunc());
  // expect(mockFunc).toHaveReturned();
  // mockFunc();
  mockFunc.mockReturnValue(2);
  mockFunc(3);
  mockFunc.mockReturnValue(33);
  mockFunc(5);
  mockFunc.mockReturnValue(3);
  mockFunc(2, 'abu');
  // expect(mockFunc).toHaveBeenCalled();
  expect(mockFunc).toHaveBeenCalledWith(5);
  // expect(mockFunc).toHaveBeenLastCalledWith(6);
  expect(mockFunc).toHaveReturnedWith(33);
  expect(mockFunc).toHaveLastReturnedWith(3);
  expect(mockFunc.mock.calls[2][0]).toBe(2);
  expect(mockFunc.mock.calls[2][1]).toContain('a');
});
// it('mock external dependencies', () => {
// // const val = 3;
// const res = mul(1, 4, 4);
// // expect(res).toMatch('nice');
// expect(res).toBe(16);
// });
// it('first 2 args must sum to 10', () => {
// const res = mul(5, 5, 2);
// expect(res).toBe(20);
// });
// it('write a mock func for sum', () => {
// util.sum = jest.fn().mockReturnValue('nice one');
// const res = mul(2, 1, 7);
// expect(res).toBe(20);
// });
describe('sum', () => {
  it('ladt lin', () => {
    // sum = (a, b) => {
    // console.log('hi there!');
    // return a + b;
    // };
    const res = sum(4, 7);
    expect(res).toBe(11);
  });
  it('solve', () => {
    const res = complex.solve(1, 2, 3);
    expect(res).toBe(6);
  });
});

describe('sum solved!!!', () => {
  it('should test sum', () => {
    const res = sum(4, 7);
    expect(res).toBe(11);
  });
});
