
exports.ArrayFrom = function (){

  console.log(Array.from('hello'));
  //console.log(Array.from('Good','morning')); throwns an error
  console.log(Array.from(['good','morning']));
  console.log(Array.from(['hello']));
  console.log(Array.from({a:45,b:'abc'}));//only works for iterable objects

  var arr = new Set(['good','morning','good','evening']);
  console.log(Array.from(arr));//set – is a collection of unique values.
  var arr1 = ['good','morning','good','evening'];
  console.log(Array.from(arr1));

  var arr2 = new Map([[1,2],['a','b'],[3,'c']]); //Map – is a collection of keyed values.
  console.log(Array.from(arr2));
  console.log(Array.from(arr2.keys()));
  console.log(Array.from(arr2.values()));
  
  // console.log(Array.isArray(Array.from(arr2)));
  // console.log(Array.isArray(Array.from(arr2.keys())));
  // console.log(Array.isArray(Array.from(arr2.values())));
  // console.log('\uD83D\uDE00')
  // console.log('😀'.charCodeAt(0))
  //alert( "\u{1F60D}" );
}