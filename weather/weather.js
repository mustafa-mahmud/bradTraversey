class Weather {
	constructor(city) {
		this.city = city;
	}

	//fetch weather from API
	async getWeather() {
		const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${this.city}`);

		const responsData = await response.json();

		return responsData;
	}

	//change location
	changeLocation(city) {
		this.city = city;
	}

}