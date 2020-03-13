class UI {
	constructor() {
		this.humidity = document.getElementById('w-humidity');
		this.feelsLike = document.getElementById('w-feels-like');
		this.dewpoint = document.getElementById('w-dewpoint');
		this.wind = document.getElementById('w-wind');
		this.icon = document.getElementById('w-icon');
	}

	paint(weather) {
		this.icon.setAttribute('src', 'https://www.metaweather.com/static/img/weather/s.svg');
		this.humidity.textContent = weather.title;
		this.feelsLike.textContent = weather.location_type;
		this.dewpoint.textContent = weather.woeid;
		this.wind.textContent = weather.latt_long;
	}
}