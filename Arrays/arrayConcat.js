
exports.arrayConcat = function f(){

//creates an instance of array with values we pass to the method
  console.log(Array.of(15));
  console.log(Array.of('hello','i\'am', 21 , 'years', 'old'));

//creates an array of length equal to the number we pass
const a = Array(10);
console.log(Array.isArray(a));
console.log(a);

//Array() constructor works differently for different inputs
console.log(Array(5));
console.log(Array('hello'));
console.log(Array('hello',5));
console.log(Array(5,7));

arr1 = Array.of('hello','i\'am', 21 , 'years', 'old');
arr2 = Array.of(' i','was','born','on','21st dec');
console.log(Array.isArray(arr1));
console.log(Array.isArray(arr2));

//concats the given arrays in a given order
a = arr1.concat(arr2);
console.log(a);

//to sort the array result
console.log(a.sort());

const b = a.toString();
//to convert array into string
console.log(Array.isArray(b));
console.log(b);

//Array.isArray() method examples
console.log(typeof(Array.prototype));
console.log(Array.isArray(Array.prototype));
}