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
   2 : 'hello',
   c : true,
   5 : null
}

console.log(Object.values(object1));
console.log(Object.keys(object1));
}