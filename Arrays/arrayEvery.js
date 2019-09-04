
exports.arrayEvery = function f(){

  const a = [2,5,58,4,10,6,34];

  //example for element as argument
  function testcondition1(ele,indx,arr){
    return ele < 20;
  }
  console.log(a.every(testcondition1));

  //example for index as argument 
  function testcondition2(ele,indx,arr){
    return indx < 7;
  }
  console.log(a.every(testcondition2))

  //example for array as argument
  function testcondition3(ele,indx,arr){
    return arr[6];
  }
  console.log(a.every(testcondition3))




  const b = ['hello'];
  const c = ['world'];

  function testcondition4(ele,indx,arr){
    return ele == 'hello';
  }
  function testcondition5(ele,indx,arr){
    return ele == 'World';
  }

  for(var i=0; i<=b.length; i++){
    if(i==0){
      console.log('condition test for array b');
       console.log(b.every(testcondition4));
    }
   if(i==1){
     console.log('condition test for array c');
      console.log(c.every(testcondition5))
   }
  }


}