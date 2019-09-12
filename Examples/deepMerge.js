
exports.deepMerge = function (){

  var dm = function () {

	// Setup merged object
	var newObj = {};

	// Merge the object into the newObj object
	var merge = function (obj) {
		for (var prop in obj) {
			if (obj instanceof Object) {
				// If property is an object, merge properties
				if (obj[prop] instanceof Object) {
					newObj[prop] = dm(newObj[prop], obj[prop]);
				} else {
					newObj[prop] = obj[prop];
				}
			}
		}
	};

	// Loop through each object and conduct a merge
	for (var i = 0; i < arguments.length; i++) {
		merge(arguments[i]);
	}
	return newObj;
};

var first = {
sample: 'Sample',
loc: {
country: 'India'
}
},
second = {
loc: {
continent: 'Asia'
}
},
third = {
loc: {
planet: 'Earth'
}
},

four = {
loc: {
example:'Sample'
}
}

console.log(dm(first,second,third,four));
// var a={}
// console.log(a instanceof Object)
}