const { Clima } = require('./Clima');
const { UI } = require('./UI');
const { Storage } = require('./Storage');
require('../css/bootstrap.min.css');
require('../css/style.css');

const storage = new Storage();
const ui = new UI();
const { city, countryCode } = storage.getLocationData();

const clima = new Clima(city, countryCode);

async function ClimaFetch() {
	const data = await clima.getClima();
	ui.render(data);
}

const btnFrm = document.getElementById('btn-w');
btnFrm.addEventListener('click', (e)=>{
	const city = document.getElementById('city').value;
	const country = document.getElementById('countryCode').value;

	clima.changeLocation(city,country);
	storage.setLocationData(city,country);
	ClimaFetch();

	e.preventDefault();	
});

document.addEventListener("DOMContentLoaded", ClimaFetch)
