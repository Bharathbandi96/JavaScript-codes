
exports.arrayJoin = function f(){

  const arr = ['this is us'];
  console.log(arr.join());

  const arr = ['We','Are','Very','Close','To','Each','Other'];
  console.log(arr.join(''));

  const arr = ['We','Are','Saperated','By','hyphen'];
  console.log(arr.join('-'));

  const arr = ['We','Are','Saperated','By','comma'];
  console.log(arr.join());

  const arr = ['We','Are','Saperated','By','star'];
  console.log(arr.join('*'));
  
//we can join array elements with any kind of saperators
}