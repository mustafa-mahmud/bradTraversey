document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
	e.preventDefault();

	const number = document.querySelector('input[type="number"]').value;

	const xhr = new XMLHttpRequest();

	xhr.open('GET', `https://api.icndb.com/jokes/random/${parseInt(number)}`, true);

	xhr.onload = function () {
		if (xhr.status === 200) {
			const response = JSON.parse(this.responseText);

			let output = '';
			if (response.type === 'success') {
				response.value.forEach(cur => {
					output += `<li>${cur.joke}</li>`;
				});
			} else {
				jokes.innerHTML = `
				<li>Something went wrong, Pls try again.</li>
				`;
			}
			document.querySelector('.jokes').innerHTML = output;
		}
	}

	xhr.send();
}