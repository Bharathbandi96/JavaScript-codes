
exports.arrayFlat = function f(){

  const arr1 = [4,58,'hi',[5,'hello'],['test','exp',[74,58,'end']]];

  //by default Array.flat() will concat the sub arrays to depth 1
  console.log(arr1.flat());

  //we can provide the depth value for concat
  console.log(arr1.flat(2));

  //we can use Infinity to concat any number of sub arrays
  console.log('using Infinity to concat all sub arrays instead of specifying depth')
  const arr2 = [1,[2,[3,[4,[5,[6,[7,[8,[9,[10]]]]]]]]]];
  console.log(arr2.flat(Infinity));


//examples for map() and flatMap() methods
  const arr3 = ['start',4,5,8,'end'];

  console.log(arr3.map(x => x+2 ));
  console.log(arr3.map(x => [x+2] ));

  console.log(arr3.flatMap(x => [x+2] ));
  console.log(arr3.flatMap(x => x+2 ));
  console.log(arr3.flatMap(x => [[x+2]] ));


  const arr4 = ["this is test example","to test working of flatMap"];
  console.log(arr4.map(x => x.split(" ")));
  console.log(arr4.flatMap(x => x.split(" ")));
}