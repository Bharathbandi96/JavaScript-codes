
exports.MapReduce = function (){

  function f(x,y,z){
    return x+y;
  }

  var v = ['h','e','l','l','o'];
  console.log(v.map(f));
  console.log(v.reduce(f));
  
  var u = [1,5,8,6,47,35,87,5];
  console.log(u.map(f));
  console.log(u.reduce(f));
  
  var student = [
  { sub_id: 120, name: 'abc', marks: 65 },
  { sub_id: 524, name: 'def', marks: 78 },
  { sub_id: 656, name: 'ghi', marks: 85 },
  { sub_id: 388, name: 'jkl', marks: 62 }
];

  var stdIDS = student.map(function (student) {
  return student.sub_id
});

console.log('Student subject IDs are: '+stdIDS);

var Totalmarks = student.reduce(function (total, std) {
  return total + std.marks;
});

console.log('Total marks obtained by student: '+Totalmarks);


//eleminate duplicates from an array
function dup(acc,cv){

  if(acc.indexOf(cv)===-1)
    acc.push(cv);
    return acc;
}

var str = 'helloworld'
var a = str.split('').reduce(dup,[]);
console.log(a);


//to count repeated elements
function ocu(acc, cv) { 
  if (cv in acc) {
    acc[cv]++;
  }
  else {
    acc[cv] = 1;
  }
  return acc;
}

console.log(str.split('').reduce(ocu, {}));

}