export const sum = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 100);
};

const plusOne = 0;
const sumAsync = (a, b) => new Promise((res, rej) => {
  if (plusOne === 1) {
    rej(Error("couldn't get the result"));
  }
  setTimeout(() => {
    res(a + b);
  }, 100);
});

export function forEach(items, callback) {
  for (let index = 0; index < items.length; index += 1) {
    callback(items[index]);
  }
}

// (async function () {
// setInterval(() => {
// plusOne += 1;
// console.log(plusOne);
// sumAsync(1, 2)
// .then(res => {
// console.log(res);
// })
// .catch(err => {
// console.log(err);
// });
// }, 1000);
// }());

export default sumAsync;
