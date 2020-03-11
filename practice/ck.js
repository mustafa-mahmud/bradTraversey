const data = [{
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
}, getPost);