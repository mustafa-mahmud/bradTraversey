/* const data = [{
		title: 'post 1',
		info: 'post one'
	},
	{
		title: 'post 2',
		info: 'post two'
	},
];

//create posts
function createPost(post, cb) {
	setTimeout(() => {
		data.push(post);
		cb();
	}, 2000);
};

//get posts
function getPost() {
	setTimeout(() => {
		let output = '';
		data.forEach(cur => {
			output += `<li>${cur.title} and ${cur.info}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
};

createPost({
	title: 'Post 3',
	info: 'Post Three'
}, getPost); */

//object literal with fat arrow func
/* const obj = () => ({

	name: 'John'
});
console.log(obj().name); */

//single param obj
/* const hello = name => ({
	name: name
});
console.log(hello('mithu').name); */

//multipale with obj
/* const hello = (fName, lName) => ({
	fname: fName,
	lname: lName
});

console.log(`My name is ${hello('Mithu', 'Khan').fname} ${hello('Mithu', 'Sorkar').lname}`); */

//fat with map
/* const users = ['Bob', 'John', 'Doe'];
const names = users.map(cur => cur.length);

console.log(names); */

//ASYNC & AWAIT
/* async function myFunc() {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve('Hello'), 1000);
	})

	const res = await promise;
	return res;
}

myFunc()
	.then(res => console.log(res))
	.catch(err => console.log(err)); */

/* async function getUsers() {
	//await response of the fetch call
	const response = await fetch('https://jsonplaceholder.typicode.com/users');

	//when promised is resolved
	const data = await response.json();
	return data;
}

getUsers()
	.then(user => console.log(user))
	.catch(err => console.log(err)); */