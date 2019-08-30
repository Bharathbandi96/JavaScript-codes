exports.propertyNames = function f(){
const object1 = {
  z: 'h',
  b: 2,
  a: 1,
  c: 3
};

Object.defineProperties(object1,{prop1:{value:45,enumerable:true},prop2:{value:'hello',enumerable:false},prop3:{value:'world',enumerable:true}});
console.log('example for Object.getOwnPropertyNames() method');
console.log(Object.getOwnPropertyNames(object1).sort());
// expected output: Array ["a", "b", "c"]

const obj = {
  a: 'somestring',
  b: 42,
  c: false
};
Object.defineProperties(obj,{prop1:{value:45,enumerable:true},prop2:{value:'hello',enumerable:false},prop3:{value:'world',enumerable:true}});

console.log('example for Object.keys() method');
console.log(Object.keys(obj));

}