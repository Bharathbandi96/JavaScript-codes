
exports.ObjectExp = function f(){


// function printLine(output){
// document.body.innerHTML += '<br/>' + output;
// }

function printLine(output){
console.log(output.toString());
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
