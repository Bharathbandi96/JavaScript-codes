
exports.test = function f(){

const set = new Set(['foo', 'bar', 'baz', 'foo']);

console.log(Array.from(set));
Array.from(set,(v,a) => console.log(a));
Array.from({length: 5}, (v, i) => console.log(i));
}