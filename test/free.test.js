/*
 *
 * create .editorconfig and define all styles
 * install eslint, at this point u can lint file but no go formatting yet
 * install prettier-eslint for a nice formatting
 * tweak ur text-editor for nice formatting
 *  */
let bob = 56;
bob = '56';
let woo = () => {
  // console.log('show some');
};
woo();

woo = () => bob;
woo();
const boo = 77;
(function moo() {
  let h = 7;
  h = 'hhh';
  return boo + h;
}());
const g = se => se * 4;
/* @ parens a - integer
 * @ params b - integer
 * @ params call - function
 * */
const sum = (a, b, callback) => {
  console.log('result, wait a second later!');
  setTimeout(() => {
    callback(a + b, a * b + g);
  }, 2000);
};
sum(4, 6, su => {
  console.log(su);
});
