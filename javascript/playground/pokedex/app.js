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

let isFetching = false;
async function observerCallback([entry]) {
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
		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error('Fetch failed');
			const data = await response.json();
			yield* data.results;
			url = data.next;
		} catch (e) {
			yield { error: true };
		}
	}
}

async function renderBatch(amount) {
	const fragment = new DocumentFragment();
	const batchPromises = Array.from({ length: amount }, async () => {
		const { value, done } = await pokemonFactory.next();
		if (done) return null;
		if (!value?.url) return failedToLoadCard();

		try {
			const res = await fetch(value.url);
			const details = await res.json();

			return createPokemonCard(value, details);
		} catch (error) {
			return failedToLoadCard();
		}
	});

	const cards = await Promise.all(batchPromises);

	cards.forEach((card) => {
		if (card) fragment.appendChild(card);
	});

	main.appendChild(fragment);
}

function failedToLoadCard() {
	const card = document.createElement('div');
	card.textContent = 'Faild to load';
	card.classList.add('failed');
	return card;
}
