//get text
document.getElementById('button1').addEventListener('click', getText);

//get json
document.getElementById('button2').addEventListener('click', getJson);

//get api
document.getElementById('button3').addEventListener('click', getAPI);

//get text
function getText() {
	fetch('test.txt')
		.then(function (res) {
			return res.text();
		})
		.then(function (data) {
			document.getElementById('output').textContent = data;
		})
		.catch(function (err) {
			console.log(err);
		});
}

//get json
function getJson() {
	fetch('post.json')
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			let output = '';
			data.forEach(cur => {
				output += `Title: ${cur.title} and Body ${cur.body} <br/>`;
			});
			document.getElementById('output').innerHTML = output;

		})
		.catch(function (err) {
			console.log(err);
		});
}

//get api
function getAPI() {
	fetch('https://api.github.com/users')
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			let output = '';
			data.forEach(user => {
				output += `Name: ${user.login} <br/>`;
			});
			document.getElementById('output').innerHTML = output;

		})
		.catch(function (err) {
			console.log(err);
		});
}