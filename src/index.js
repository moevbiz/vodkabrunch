const api = `api/recipes`;

async function getData() {
    let response = await fetch(api);
    let data = await response.json()
    return data;
}

getData()
.then(data => init(data));

function init(data) {
	document.body.classList.remove('loading');
	let elements = [];
	data.forEach(element => {
		elements.push(createDiv(element));
	});
	// elements.forEach(element => {
	// 	document.body.insertAdjacentHTML('beforeend', element)
	// })
	console.log(data);
	console.log(elements);
}

function createDiv(element) {
	let str = `
		<h2 class="full">${element.title}</h2>
		<div class="infos">
			<div class="info">
				<h3>Type</h3>
				<p>${element.type}<p>
			</div>
			<div class="info">
				<h3>Difficulty</h3>
				<p>${element.difficulty}<p>
			</div>
			<div class="info">
				<h3>Prep time</h3>
				<p>${element.preptime}<p>
			</div>
			<div class="info">
				<h3>Suggested by</h3>
				<p>${element.contributor}<p>
			</div>
			<div class="info">
				<h3>Prepared by</h3>
				<p>${element.made_by}<p>
			</div>
		</div>
		<div class="details">
			<div class="text">
				<h3>Instructions</h3>
				<p>${element.text}</p>
			</div>
			<div class="text">
				<h3>Notes</h3>
				<p>${element.notes}</p>
			</div>
			<div class="text">
				<h3>Goes well with</h3>
				<p>${element.goes_well_with}</p>
			</div>
		</div>
	`
	let article = document.createElement('article');
	article.innerHTML = str;
	article.classList.add('is-collapsed');
	article.querySelector('h2').addEventListener('click', () => {
		if (article.classList.contains('is-collapsed')) {
			article.classList.remove('is-collapsed');
		} else {
			article.classList.add('is-collapsed');
		}
	})
	document.body.appendChild(article);
	return article;
}

// import App from './App.svelte';

// const app = new App({
// 	target: document.body,
// 	props: {
// 		name: 'world'
// 	}
// });

// export default app;