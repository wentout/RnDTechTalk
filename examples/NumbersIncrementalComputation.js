'use strict';

// there is Object [null prototype]
// under the hood, so we have room there

var a = new Number(5);
a.extract = function () {
	return a.valueOf();
};

var b = new Number(7);
b.extract = function () {
	return b.valueOf();
};

console.log('there is no prototype pollution', Number.extract);

Object.setPrototypeOf(b, a);

console.log(b);
console.log(b instanceof Number);
console.log(b.valueOf());
console.log(b.extract());
console.log(Object.getPrototypeOf(b));
console.log(Object.getPrototypeOf(b).valueOf());
console.log(Object.getPrototypeOf(b).extract());

var s = {};
Object.setPrototypeOf(s, a);
Object.setPrototypeOf(b, s);

console.log(b instanceof Number);
console.log(s instanceof Number);

console.log(s instanceof Number);
console.log(Object.getPrototypeOf(s).valueOf());
console.log(b.valueOf());
console.log(b.extract());
console.log(s.extract());


var m = {
	pick: 123
};

Object.setPrototypeOf(m, a);

var n = new Number(9);

Object.setPrototypeOf(n, m);

console.log(n.valueOf());
console.log(Object.getPrototypeOf(n).pick);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(n)).extract());

console.log(m instanceof Number);
console.log(m instanceof Object);


var k = new Number(11);

var p = {
	zik: 321
};

Object.setPrototypeOf(k, p);
Object.setPrototypeOf(p, n);

console.log(k);
console.log(k.zik);
console.log(k.pick);


