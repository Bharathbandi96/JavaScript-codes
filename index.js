const set = new Set(['foo', 'bar', 'baz', 'foo']);
console.log(Array.from(set));


Array.from(set,(_,a) => console.log(_));