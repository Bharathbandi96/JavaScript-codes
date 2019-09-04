
exports.arrayCopywithin = function f(){

  //Array.copyWithin() copies an array in the index we pass until the length of an array
  const a = ['a' ,5 ,'b' ,8 ,'z' ,3 ,7 ,'t'];
  console.log(a.copyWithin(5))

  const b = ['a','b','c','d','e','f','g','h','i','j'];
  console.log(b.copyWithin(5));

  //here 1->target , 5->start and 9->end
  //copy of an array between start to end index is copied in target index 
  const c = [1,2,3,4,5,6,7,8,9,10];
  console.log(c.copyWithin(1,5));

  //copy of an array from start index to end of an array is copied in target index 
  const d = ['a','b','c','d','e','f','g','h','i','j'];
  console.log(d.copyWithin(2,5))

  //copy of an array is copied from target index to end index
  const e = [1,2,3,4,5,6,7,8,9,10];
  console.log(e.copyWithin(1,'',5));

}