const http = new EasyHTTP();

//GET
/* http.get('https://jsonplaceholder.typicode.com/users')
	.then(res => console.log(res))
	.catch(err => console.log(err)); */

//data create
const data = {
	name: 'John',
	username: 'johndoe',
	email: 'john@email.com'
}

//POST
/* http.post('https://jsonplaceholder.typicode.com/users', data)
	.then(data => console.log(data))
	.catch(err => console.log(err)); */

//PUT/UPDATE
/* http.put('https://jsonplaceholder.typicode.com/users/2', data)
	.then(data => console.log(data))
	.catch(err => console.log(err)); */

//DELTE
http.delete('https://jsonplaceholder.typicode.com/users/2')
	.then(data => console.log(data))
	.catch(err => console.log(err));