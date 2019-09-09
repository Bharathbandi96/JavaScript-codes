
exports.arrayReverse = function f(){

  const arr = [4,8,57,74];
  console.log(arr.indexOf(8));

//Array.reverse() method changes the original array
  console.log(arr.reverse());

  console.log(arr.indexOf(8));

  var str = 'asaf'
//enter a string to check if it is a palindrome

  const a1 = str;
  const b = a1.split('');
  console.log(b);
  //console.log(typeof(b));
  
  const a2 = str;
  const b2 = a2.split('');
  const c = b2.reverse();
  console.log(c);
  //console.log(typeof(c));

  var count1 = 0;
  var count2 = 0;
  //var v = a1.length;

  for(let i=0;i<a1.length;i++)
  {
    if(b[i]===c[i])
    {
      count1++;
    }
    else{
      count2++;
    }
  }

  //condition to check palindrome
  if(count1==a1.length){
    console.log('it is a palindrome');
  }
  else{
    console.log('it is not a palindrome');
  }
}