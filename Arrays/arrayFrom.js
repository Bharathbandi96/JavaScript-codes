
exports.arrayFrom = function f() {
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1} ,(v, i) => start + (i * step));


// Generate numbers range 0..4 with increment of 1
console.log(range(0, 4, 1));
 


// to generate even numbers for given range
console.log(range(0, 10, 2)); 


// to generate odd numbers for given range 
console.log(range(1, 10, 2)); 


// [Capital letters]
console.log(range('A'.charCodeAt(),'Z'.charCodeAt(), 1).map(x => String.fromCharCode(x)));


// [Small letters]
console.log(range('a'.charCodeAt(),'z'.charCodeAt(), 1).map(x => String.fromCharCode(x)));

}