
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
}