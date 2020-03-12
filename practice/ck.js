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