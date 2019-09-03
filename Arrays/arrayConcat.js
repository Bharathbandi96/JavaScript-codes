
exports.arrayConcat = function f(){
const array1 = ['z', 'b', 'c'];
var array2 = ['d', 'e', 54];

//const a = Array(7);

//Array.of(7);      
//Array.of(1, 2, 3);


//Array.isArray([1, 2, 3]);  // true
//Array.isArray({foo: 123}); // false
//Array.isArray('foobar');   // false
//Array.isArray(undefined);
//console.log(Array.isArray(a));



console.log(array1.concat(array2).sort());
console.log(array1);
console.log(array2);


}