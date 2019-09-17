
exports.s_lice = function(){

//returns a shallow copy of a portion of an array into a new array object
  var a = ['hello','good','morning'];
  var b = [{1:45,2:21,'num':65},{5:87,6:'hi'}];
  var c = 'its dangerous';
  console.log(c.slice(0,3))
  console.log(b.slice(2))
  console.log(b.slice(1,1))
  console.log(b.slice(1,2))
  console.log(a.slice(-2,-1))

  var student = { sub_id: 120, name: 'abc', marks: 65, 
  contact:{phone: 8754215487,email:'abc@gmail.com'}};
  var updateStu = [student,  {DOB:'1-5-2019',Address:'bangalore'}];

  console.log(updateStu.slice(0,2));

  console.log(updateStu[0].contact);
  console.log(updateStu[0].contact.email);
  student.sub_id = 85125;

  console.log(student.sub_id);
  console.log(updateStu[0].sub_id);

  updateStu[0].name = 'xyz';

  console.log(student.name);
  console.log(updateStu[0].name);


//splice method modifies the original array by adding,deleting and replacing the array elements

  console.log('');
  console.log('Examples for splice method');
  var x = ['this','is','just','an','example']

  console.log(x.splice(1,0));
  console.log(x)

  x.splice(2,0,'not');
  console.log(x);

  console.log(x.splice(3,1));
  console.log(x);
  
  console.log(x.splice(3,1,'slice'));
  console.log(x);


}

