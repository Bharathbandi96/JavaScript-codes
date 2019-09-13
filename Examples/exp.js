
exports.Exp = function (){
  var a = Array.of({1:'as',2:'asdf'})
  console.log(Object.values(a));

  var arr4 = [1, 2, [3, 4, [5, 6,['g',[5],['gvnv']], [7, 8, [9, 10]]]]];
  console.log(arr4.flat(Infinity));
}