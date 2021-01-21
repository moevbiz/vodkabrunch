import './index.scss';

const api = `api/recipes`;

async function getData() {
    let response = await fetch(api);
    let data = await response.json()
    return data;
}

getData()
.then(data => init(data));


function init(data) {
    console.log(data);
}