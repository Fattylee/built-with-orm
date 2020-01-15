// let res = 7;
// const sum = (a, b) => {
// console.log(res);
// setTimeout(() => {
// console.log(res);
// return a + b;
// }, 5000);
// return 5;
// };
// res = sum(1, 2);
// console.log(res);

// function setTimeout(cb, timer) {
// // setup and register an with with the timer value
// cb();
// }

export const sumAsync = (a, b, cb) => {
  console.log('waiting for result...');
  setTimeout(() => cb(a + b), 2000);

  // cb(a + b);
};
export const myCallBack = res => {
  console.log(res);
};
// sumAsync(1, 1, myCallBack);

const sum = (a, b, c, d) => {
  if (typeof d === 'function') {
    d();
    d(2, 4, 5);
    d(a + b + c, a * b * c, (a * b) / c);
    return;
  }
  if (typeof c !== 'undefined') {
    return a + b * c;
  }
  if (typeof b !== 'undefined') {
    return a + b;
  }
  return a;
};

const callbackhere = (s, p, d) => {
  console.log(s, p, d);
};
const res = sum(1, 2, 3, callbackhere);
// console.log(typeof sum());
console.log(res);
