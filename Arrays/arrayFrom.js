
exports.arrayFrom = function f(){

//The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
console.log('Array.form() examples');
console.log(Array.from('Hello'));
console.log(Array.from('Good Morning'));
console.log(Array.from([5,'hello',854,"Test12"]));

//const range = (start, stop, step) => Array.from({length:6},(_, i) => start + (i * step));
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

//to print numbers between range
console.log('Sequence Numbers');
console.log(range(0,5,1));
//to print even numbers
console.log('Even Numbers');
console.log(range(0,10,2));
//to print odd numbers
console.log('Odd Numbers');
console.log(range(1,10,2));

//to print ASCII code of capital letters
console.log('ASCII codes of capital letters and their string format');
console.log(range('A'.charCodeAt(),'Z'.charCodeAt(),1));
//to print capital letters
console.log(range('A'.charCodeAt(),'Z'.charCodeAt(),1).map(x => String.fromCharCode(x)));

//to print ASCII code of small letters
console.log('ASCII codes of small letters and their string format');
console.log(range('a'.charCodeAt(),'z'.charCodeAt(),1));
//to print small letters
console.log(range('a'.charCodeAt(),'z'.charCodeAt(),1).map(x => String.fromCharCode(x)));
}