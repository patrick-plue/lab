function* generatorFunc() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
}

const genObj = generatorFunc();
const genObj2 = generatorFunc();

genObj.forEach((el) => console.log(el));

for (let el of genObj2) {
	console.log(el);
}

function* idCreator() {
	let id = 1;
	while (true) {
		yield id;
		id++;
	}
}

console.log('id:');
const idFactory = idCreator();
console.log(idFactory.next().value);
console.log(idFactory.next().value);
console.log(idFactory.next().value);
console.log(idFactory.next().value);
console.log(idFactory.next().value);

function* fibonacciCreator() {
	let current = 0;
	let next = 1;
	while (true) {
		yield current;
		[current, next] = [next, current + next];
	}
}

console.log('fibonacci');
const fibonacciFactory = fibonacciCreator();

// for (let i = 0; i < 20; i++) {
// 	console.log(fibonacciFactory.next().value);
// }

for (let n of fibonacciFactory) {
	if (n > 200) break;
	console.log(n);
}

//recreating python range method
function* range(start, end, step = 1) {
	for (let i = start; i <= end; i += step) {
		yield i;
	}
}

console.log('range');
for (let num of range(0, 10, 2)) {
	console.log(num);
}
