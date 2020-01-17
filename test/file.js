// const util = require('./filez');
// import util from './filez';
import { sum } from './filez';

module.exports.solve = (a, b, c) => {
  const res = sum(a, b);
  return res + c;
};
// export default { solve, sum };
