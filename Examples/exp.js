
exports.Exp = function (){
  // var a = Array.of({1:'as',2:'asdf'})
  // console.log(Object.values(a));

  // var arr4 = [1, 2, [3, 4, [5, 6,['g',[5],['gvnv']], [7, 8, [9, 10]]]]];
  // console.log(arr4.flat(Infinity));

  var arr = Array(3).fill({1:5})// [{}, {}, {}];

  arr[2].hello = "world";
  console.log(arr)

  
  const a = {0: 'a', 1: 3, 2: 'b', length: 3};

  console.log(a); // {0: 1, 1: 2, 2: 3, length: 3}

  Array.prototype.reverse.call(a); //same syntax for using apply()

  console.log(a);

  var c={0:'a',1:'c',2:'b', length: 3};
  var c={1:'a',2:'c',3:'b', length: 3};
  console.log(c);
  Array.prototype.reverse.call(c);
  console.log(c);

  console.log([].copyWithin.call({length: 5, 3: 1}, 0, 1));
}