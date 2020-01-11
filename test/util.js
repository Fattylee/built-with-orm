exports.sum = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 3800);
};

const sumAsync = (a, b) => new Promise((res, rej) => {
  setTimeout(() => {
    res(a + b);
  }, 7000);
});
export function forEach(items, callback) {
  for (let index = 0; index < items.length; index += 1) {
    callback(items[index]);
  }
}

export default sumAsync;
