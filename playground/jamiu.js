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
    // d();
    // d(2, 4, 5);
    // d(a + b + c, a * b * c, (a * b) / c);
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
const result = sum(1, 2, 3, callbackhere);
// console.log(typeof sum());
console.log(result);
const is = !false;
const promiseMe = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (is) {
      resolve('wawuu!!');
    }
    reject(Error('got rejected!'));
  }, 4000);
});
// console.log(promiseMe().catch(console.log));
// console.log(
// promiseMe()
// .then(res => {
// console.log('do some work');
// console.log(res);
// // return 566666;
// tty;
// })
// .then(res => console.log('last then', res))
// .then(res => console.log('last then plus', res))
// .catch(console.log),
// );

const asyncMethod = async () => {
  promiseMe();
  setTimeout(() => {
    console.log('wow im asyncMethod');
    return 65;
  }, 4000);
  console.log('finished asyncMethod');
};
// const getRes = () => asyncMethod().then(res => {
// console.log('handled promiseMe', res);
// });
const getRes = async () => {
  console.log('inside getRes...');
  const res = await asyncMethod();
  console.log('handled promiseMe', res);
};
console.log('b4 calling getRes');
console.log(
  getRes(),
  // .then(res => {
  // console.log('giveMe more result', res);
  // }),
);
console.log('last line here');
