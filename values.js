exports.values = function f(){

  function MyNum(n) {
  this.number = n;
}

MyNum.prototype.valueOf = function() {
  return ` Number ${this.number}'s multiple of 10 is : `+this.number*10;
};

const obj = new MyNum(5);

console.log(obj.valueOf());

const object1 = {
   
   a : 34,
   b : 'hello'
   c : null,
   d : true
}

console.log(Object.values(object1));
console.log(Object.keys(object1));
}