
exports.arraySplice = function f(){

  function test(a,b,c,d){
    return arr.splice(a,b,c,d);
  }

  var arr = ['start','add','continue','add2','end'];
//for each element to insert, we need to pass separate argument
  console.log('Elements which are removed from an array')
  console.log(test(1,2,'hello','world'));
  console.log('Resulting Array of splice() method')
  console.log(arr);


  var arr1 = [1,2,3,5,6,7,8,9,10]
  arr1.splice(3,0,4)
  console.log(arr1);

  console.log('');
  console.log('Sorted array');
  console.log(arr.sort());

  console.log('');
  console.log('result of toLocaleString');
  console.log(arr.toLocaleString('en'));

  console.log('');
  console.log('result of toString');
  console.log(arr1.toString());

  console.log('');
  console.log('result of array[iterator]');
  function iterator(){
    return res.next().value
  }
  var arr2 = ['ele1', 'ele2', 'ele3', 'ele4', 'ele5'];
  var res = arr2[Symbol.iterator]();

  for(var i=0;i<arr2.length;i++){
    console.log(iterator());
  }
  
}