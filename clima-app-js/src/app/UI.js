export class UI {

	constructor() {
		this.location  = document.getElementById('weather-location');
		this.desc  = document.getElementById('weather-description');
		this.temp  = document.getElementById('weather-string');
		this.humidity  = document.getElementById('weather-humidity');
		this.wind  = document.getElementById('weather-wind');
	}

	render(clima) {
		const { name } = clima;
		const { country } = clima.sys;
		const { temp, humidity } = clima.main;
		const { speed } = clima.wind;
		const { description } = clima.weather[0];

		this.location.textContent = `${name} / ${country}`;
		this.desc.textContent = description;
		this.temp.textContent = `${temp} °C`;
		this.humidity.textContent = `Humedad: ${humidity} %`;
		this.wind.textContent = `Viento: ${speed} m/s`;
	}

}