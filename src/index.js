const api = `api/recipes`;

async function getData() {
    let response = await fetch(api);
    let data = await response.json()
    return data;
}

getData()
.then(data => init(data));

const filterContainer = document.querySelector('.filter-container');
const btnAll = document.querySelector('button[data-value="all"]');
btnAll.addEventListener('click', (e) => {
	filter(e.target.dataset.value);
})

let addedFilters = [];
let elements = [];
let filters = [btnAll];

function init(data) {
	document.body.classList.remove('loading');
	data.forEach(element => {
		if (!addedFilters.includes(element.type)) {
			filters.push(createFilter(element));
		}
		elements.push(createDiv(element));
	});
	// elements.forEach(element => {
	// 	document.body.insertAdjacentHTML('beforeend', element)
	// })
	console.log(data);
	console.log(elements);
}

function createFilter(element) {
	let str = `${element.type}`;
	let btn = document.createElement('button');
	btn.innerHTML = str;
	btn.dataset.value = element.type;
	btn.addEventListener('click', (e) => {
		filter(e.target.dataset.value);
	})
	filterContainer.appendChild(btn);
	addedFilters.push(element.type);
	return btn;
}

function filter(value) {
	if (value == 'all') {
		elements.forEach(element => {
			element.classList.remove('is-hidden');
		})
		filters.forEach(filter => {
			filter.classList.remove('is-selected');
		})
	}
	filters.forEach(filter => {
		if (filter.dataset.value == value) {
			filter.classList.add('is-selected');
		} else {
			filter.classList.remove('is-selected');
		}
	})
	elements.forEach(element => {
		if (element.dataset.type == value || value == 'all') {
			element.classList.remove('is-hidden');
		} else {
			element.classList.add('is-hidden');
		}
	})
}

function createDiv(element) {
	let str = `
		<h2 class="full"><span>${element.title}</span></h2>
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
				<p>${element.text.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
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
	article.dataset.type = element.type;
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