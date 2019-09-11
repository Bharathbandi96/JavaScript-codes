
exports.ObjectExp = function f(){

function printLine(output){
document.body.innerHTML += '<br/>' + output;
}

var person = { firstName:'Agile', lastName:'Point', location:'India',category:'Software'};

a=[];
b=[];
for(prop in person){
b.push(prop);
a.push(person[prop]);
}
printLine(b);
printLine(a);
}
