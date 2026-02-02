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

console.log('paginated and cached fetch with pokemon');

async function* pokemonFetcher() {
	let url = 'https://pokeapi.co/api/v2/pokemon/';
	while (url) {
		const response = await fetch(url);
		const data = await response.json();
		yield* data.results;
		url = data.next;
	}
}
function createPokedexController(pageSize = 20) {
	const fetcher = pokemonFetcher();
	const cache = [];

	return {
		async getPage(pageNumber) {
			const startIndex = pageNumber * pageSize;
			const endIndex = startIndex + pageSize;

			while (cache.length < endIndex) {
				const { value, done } = await fetcher.next();
				if (done) break;
				cache.push(value);
			}

			return cache.slice(startIndex, endIndex);
		},
	};
}

const pokedex = createPokedexController(20);

const page1 = await pokedex.getPage(0);
console.log(page1.map((p) => p.name));

const page2 = await pokedex.getPage(1);
console.log(page2.map((p) => p.name));

const page1Again = await pokedex.getPage(0);
console.log(page1Again.map((p) => p.name));
