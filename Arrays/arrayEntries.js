
exports.arrayEntries = function f(){

var array1 = ['a', 'b', 5, 'den34', 'c','d','e'];

//returns an array iterator object with key-value pairs
var iterator1 = array1.entries();

var i=0;
var j=array1.length;
while(i<j){
console.log(iterator1.next().value);
  i++;
}

console.log(typeof(iterator1));


// const array2 = ['exp1','exp2','exp3','exp4','exp5'];
// var iterator2 = array2.values();
// for(const value1 of iterator2){
//   console.log(value1);
//   }

// var iterator3 = array2.keys();
// for(const value2 of iterator2){
//   console.log(value2);
//   }
// const test = ['hello','hi','welocme',123];

// for (const [testa,testb] of test.entries())
//   console.log(testa, testb);

// var test2 = [23,54,09,754,23,43];
// var iterator = test2.entries();

// for (let i of iterator) {
//   console.log(i);
// }

}
