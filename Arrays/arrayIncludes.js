
exports.arrayIncludes = function f(){

  function test(ele,indx,arr){
    var z = arr;
    z[1]=40;
    return console.log('the element ' + ele +" is included in an array, hence: "+ arr.includes(ele) +" ");
  }

  const a = [5,7,52];
  a[2]=74;
  a.forEach(test);
console.log('');
  console.log('examples to find index of an array elements')
  a[1]=10;
  a[a.length]=45;
  a[a.length]=5;
  console.log(a);

  //to find the index and lastindex of an element in an array

  console.log(a.indexOf(7));
  console.log(a.indexOf(74));
  console.log(a.indexOf(40));
  console.log(a.indexOf(5));
  console.log(a.lastIndexOf(5));

console.log("lastIndexof() " + -1*4)
  var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Tiger',-1));
console.log(animals.lastIndexOf('Tiger',-2));
console.log(animals.lastIndexOf('Tiger',-3));
console.log(animals.lastIndexOf('Tiger',-4));
console.log(animals.lastIndexOf('Tiger',-5));
console.log(animals.lastIndexOf('Tiger',-6));

console.log("indexOf() " + -1*4)
console.log(animals.indexOf('Tiger',-1));
console.log(animals.indexOf('Tiger',-2));
console.log(animals.indexOf('Tiger',-3));
console.log(animals.indexOf('Tiger',-4));
console.log(animals.indexOf('Tiger',-5));
console.log(animals.indexOf('Tiger',-6));
}