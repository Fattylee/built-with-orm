// users.js
import axios from 'axios';

class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}

function forEach(items, callback) {
  for (let index = 0; index < items.length; index += 1) {
    callback(items[index]);
  }
}

const div = (num1, num2) => num1 / num2;

const cbm = (a, b, cb) => cb(a + b, a * b);

const style = cb => cb('hello world', 567);

export {
  cbm, forEach, div, Users as default,
};

style((first, sec) => {
  // console.log(sec, 'this is the first arguement', first);
  // console.log(sec, 'next one to this', first);
});
