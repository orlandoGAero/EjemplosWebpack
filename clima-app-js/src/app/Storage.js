export class Storage {

	constructor() {
		this.city;
		this.countryCode;
		this.defaultCity = 'toluca';
		this.defaultCode = 'mx';
	}

	getLocationData() {

		if (localStorage.getItem('city') === null) {
			this.city = this.defaultCity;
		} else {
			this.city = localStorage.getItem('city');
		}

		if (localStorage.getItem('code') === null) {
			this.countryCode = this.defaultCode;
		} else {
			this.countryCode = localStorage.getItem('code');
		}

		return {
			city: this.city,
			countryCode: this.countryCode
		}

	}

	setLocationData(city, countryCode) {
		localStorage.setItem('city', city);
		localStorage.setItem('code', countryCode);
	}

} 
