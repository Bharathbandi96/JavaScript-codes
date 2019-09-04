
exports.propertyDescriptor = function f(){
  
  const obj = {
  property1: 42
}


Object.defineProperties(obj,{prop1:{value:45,enumerable:true},prop2:{value:'hello',enumerable:false},prop3:{value:'world',enumerable:true}});

console.log('Example for Object.getOwnPropertyDescriptor() method');
const descriptor1 = Object.getOwnPropertyDescriptor(obj,'prop3');
console.log(descriptor1);
console.log(descriptor1.value);


console.log('Example for Object.getOwnPropertyDescriptors() method');
const descriptor1 = Object.getOwnPropertyDescriptors(obj,'prop3');
console.log(descriptor1);
console.log(descriptor1.prop1.value);

}