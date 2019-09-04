exports.entries = function f(){

  const object1 = {
  a: 'somestring',
  b: 42
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
console.log(Object.entries(object1));

const array = [[2,'z'],['b',213],[,34],['z',]];

console.log(Object.fromEntries(array));

}