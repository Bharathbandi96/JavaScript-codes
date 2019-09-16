
exports.arrayReduce = function f(){

  //we can flat, loop, find occurance, delete duplicates, sum, grouping etc 

  var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(acc, cv) {
    return acc.concat(cv);
  }, ["reduce"]);

  console.log(flattened);


  //reduceRight is reverse of the reduce function
  var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(acc2, cv2) {
    return acc2.concat(cv2);
  }, ['reduceRight']);

  console.log(flattened);

  var addResult = [4,5,7,54,8,68].reduce(function(x,y){
    return x + y;
  });

  console.log(addResult);


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
}