
exports.arrayFilter = function f(){

  function test(ele,indx,arr){
    return ele.charCodeAt() < 80;
  }


//Array.filter() returns as array with elements that have passed the testcase
  const array = ['a','Z','A','B','Z'];
  console.log(array.filter(test));

  function test1(ele,indx){
    return indx < 3;
  }
  console.log(array.filter(test1));

  function test2(ele,indx,arr){
    return arr[indx] < 8;
  }
  const array1 = [3,27,5,63];
  console.log(array1.filter(test2));


//Array.find() returns the value of the first element that passes the testcase 
  const array = ['a','Z','A','B','Z'];
  console.log(array.find(test));

  function test1(ele,indx){
    return indx < 3;
  }
  console.log(array.find(test1));

  function test2(ele,indx,arr){
    return arr[indx] > 8 ;
  }
  const array1 = [3,23,5,63];
  console.log(array1.find(test2));


  function testindex(ele) {
    return ele == 23;
  }

  
  let a = array1.findIndex(testindex);
  if(a >= 0){
    a = a+1;
    console.log('The element at position '+a+' of an array passed the test case');
  }
  else{
    console.log(a);
    }
  }
