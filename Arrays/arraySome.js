
exports.arraySome = function f(){

  const arr = [4,8,1,89,14,7,58];

  function test(ele,indx,arr){
    return ele>5;
  }

  var a = 0;
  var b = 1;
  for(var i=0;i<arr.length;i++){

    const arr1 = arr.slice(a,b);
    if(true){
      console.log('the array element at position '+ arr[i] + ' has passed the test case : ' +arr1.some(test));
      a++;
      b++;
    }
  }
  console.log('The result of an whole array  : ' + arr.some(test));
}