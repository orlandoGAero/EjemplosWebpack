export class Clima {
	constructor(city, code) {
		this.apiKey = 'd35ac1188b8598d6ee2dce6b4663c060';
		this.city = city;
		this.code = code;
	}

	async getClima() {
		const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.code}&appid=${this.apiKey}&units=metric&lang=es`;

		const response = await fetch(URI);
		const data = await response.json();
		return data;
	}

	changeLocation(city, code) {
		this.city = city;
		this.code = code;
	}
}