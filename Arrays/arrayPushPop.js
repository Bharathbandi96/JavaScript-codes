
exports.arrayPushPop = function f(){

  const arr = ['Start',10,20,30,'End'];

  //push and pop
  console.log('Examples for push() and pop()');
  
  console.log(arr.push());
  console.log(arr);

  console.log(arr.push(4));
  console.log(arr);

  console.log(arr.push(50,'continues',45));
  console.log(arr);

console.log('');

  for(var i=0;i<4;i++){
    console.log(arr.pop());
  }
  console.log(arr);


  //shift and unshift
  console.log('Examples for shift() and unshift()');

  console.log(arr.unshift('we can give multiple values here'));
  console.log(arr);

  console.log(arr.unshift(['my','length','in','this','array','is','one']));
  console.log(arr);

  for(var i=0;i<2;i++){
    console.log(arr.shift());
  }
  console.log(arr);

}