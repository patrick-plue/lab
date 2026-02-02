const main = document.getElementsByTagName('main')[0];
const pokemonFactory = pokemonFetcher();
start();
async function start() {
	await getInitialPokemon();
	const observer = new IntersectionObserver(observerCallback, {
		threshold: 0.1,
	});
	const footer = document.createElement('footer');
	document.body.appendChild(footer);
	observer.observe(footer);
}

async function getInitialPokemon() {
	await renderBatch(15);
}

function createPokemonCard(pokemon, details) {
	const box = document.createElement('div');
	const image = document.createElement('img');
	image.src = details?.sprites?.other['official-artwork'].front_default;
	box.textContent = pokemon.name;
	box.classList.add('card');
	box.appendChild(image);
	return box;
}

async function observerCallback([entry]) {
	let isFetching;
	if (entry.isIntersecting && !isFetching) {
		try {
			isFetching = true;
			await renderBatch(5);
		} catch (error) {
			console.error('Failed to fetch Pokemon:', error);
		} finally {
			isFetching = false;
		}
	}
}

async function* pokemonFetcher() {
	let url = 'https://pokeapi.co/api/v2/pokemon/';
	while (url) {
		const response = await fetch(url);
		const data = await response.json();
		yield* data.results;
		url = data.next;
	}
}

async function renderBatch(amount) {
	const fragment = new DocumentFragment();
	const batchPromises = Array.from({ length: amount }, async () => {
		const { value, done } = await pokemonFactory.next();
		if (done) return null;

		const res = await fetch(value.url);
		const details = await res.json();
		return createPokemonCard(value, details);
	});

	const cards = await Promise.all(batchPromises);

	cards.forEach((card) => {
		if (card) fragment.appendChild(card);
	});

	main.appendChild(fragment);
}
