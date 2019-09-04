
exports.arrayCopywithin = function f(){
  console.log('exampe for Array.copyWithin() method')
  //Array.copyWithin() copies an array in the index we pass until the length of an array
  const arr1 = ['a' ,5 ,'b' ,8 ,'z' ,3 ,7 ,'t'];
  console.log(arr1.copyWithin(5))

  const arr2 = ['a','b','c','d','e','f','g','h','i','j'];
  console.log(arr2.copyWithin(5));

  //here 1->target , 5->start and 9->end
  //copy of an array between start to end index is copied in target index 
  const arr3 = [1,2,3,4,5,6,7,8,9,10];
  console.log(arr3.copyWithin(1,5,9));

  //copy of an array from start index to end of an array is copied in target index 
  const arr4 = ['a','b','c','d','e','f','g','h','i','j'];
  console.log(arr4.copyWithin(2,5))

  //copy of an array is copied from target index to end index
  const arr5 = [1,2,3,4,5,6,7,8,9,10];
  console.log(arr5.copyWithin(1,'',5));




  console.log('exampe for Array.fill() method');

  const arr6 = ['a' ,5 ,'b' ,8 ,'z' ,3 ,7 ,'t'];
  console.log(arr6.fill(5))

  const arr7 = ['a','b','c','d','e','f','g','h','i','j'];
  console.log(arr7.fill(5));


  //array is filled with 1 from index 5 
  const arr8 = [1,2,3,4,5,6,7,8,9,10];
  console.log(arr8.fill(1,5));

  //array is filled with 2 from index 5 
  const arr9 = ['a','b','c','d','e','f','g','h','i','j'];
  console.log(arr9.fill(2,5))

  //array is filled with 7 from starting of an array to index 5 
  const arr10 = [1,2,3,4,5,6,7,8,9,10];
  console.log(arr10.fill(7,'',5));
}