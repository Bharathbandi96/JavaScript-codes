
exports.MapReduce = function (){

  //eleminate duplicates from an array
function dup(acc,cv){

  if(acc.indexOf(cv) === -1)
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

//to print character codes using Map
function cCodes(ele){
    return ele.charCodeAt(0)
}

var a = 'Codes'
console.log(a.split('').map(cCodes));

}