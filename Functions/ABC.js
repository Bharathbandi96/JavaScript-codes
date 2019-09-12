
exports.ABC = function f(){

  var a = [54,554,2,56,6,12,5,6];

   function test(arg){
     sum=0;
    for(i=0;i<arg.length;i++){
      sum+=arg[i];
      res = sum/arg.length
    }
    return res;
  }
  console.log('The average of given array elements is: '+test.call({},a));


// function t() {
//     return person1.firstName + " " + person1.lastName;
//   }

// var person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// var x = t.apply(person1); 
// console.log(x); 


function update(x,y,z){
  return a + x + y + z
}

var a=['Monday','tuesday','wednesday','thursday'];

console.log(update.apply(a,['friday','saturday','sunday']));
console.log(update.call(a,'friday','saturday','sunday'));

var test2 = {
  x:'hello',
  tst : function tst(){
  return this.x;}
}

console.log(test2.tst.bind(test2)() + ' ' + 'world');

}