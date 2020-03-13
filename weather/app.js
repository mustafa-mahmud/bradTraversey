//init LS
const storage = new Storage();

//get stored location data
const weatherLocation = storage.getLocationData();

//init weather class from 'weather.js'
const weather = new Weather(weatherLocation);

//init UI class from 'ui.js'
const ui = new UI();

//get weather when dom loaded
document.addEventListener('DOMContentLoaded', getWeather);

//change loation event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
	e.preventDefault();
	const city = document.getElementById('city').value;

	//change location according input field
	weather.changeLocation(`${city}`);

	storage.setLocationData(`${city}`);

	getWeather();

	$('#locModal').modal('hide');

});

function getWeather() {
	weather.getWeather()
		.then(res => {
			ui.paint(res);
		})
	//.catch(err => console.log(err));
}