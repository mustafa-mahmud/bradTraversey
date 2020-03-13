//init weather class
const weather = new Weather('london');

//changed city
weather.changeLocation('Dhaka');

//get weather when dom loaded
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
	weather.getWeather()
		.then(res => console.log(res))
		.catch(err => console.log(err));
}