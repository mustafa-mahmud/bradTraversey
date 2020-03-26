import {
	http
} from "./http";

import {
	ui
} from "./ui";

//listen get post
document.addEventListener('DOMContentLoaded', getPosts);

//listen submit post
document.querySelector('.post-submit').addEventListener('click', submitPost);

//listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);

//listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

//listen for cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit);


//fun@getPosts
//get post
function getPosts() {
	http.get('http://localhost:3000/posts')
		.then(data => ui.showPosts(data))
		.catch(err => console.log(err));
}

//fun@submitPost
//add post
function submitPost() {
	const title = document.querySelector('#title').value;
	const body = document.querySelector('#body').value;
	const id = document.querySelector('#id').value;

	//store value in data
	const data = {
		title,
		body
	}

	if (title === '' || body === '') {
		ui.showAlert('Pls fill all input fileds', 'alert alert-danger');
	} else {
		//ck for id
		if (id === '') {
			//create post
			http.post('http://localhost:3000/posts', data)
				.then(data => {
					ui.showAlert('Post Added', 'alert alert-success');
					ui.clearFields();
					getPosts();
				})
				.catch(err => console.log(err));
		} else {
			//update
			http.put(`http://localhost:3000/posts/${id}`, data)
				.then(data => {
					ui.showAlert('Post Updated', 'alert alert-success');
					ui.changeFormState('add');
					getPosts();
				})
				.catch(err => console.log(err));
		}

	}

}

//fun@deletePost
//delete post
function deletePost(e) {
	e.preventDefault();
	if (e.target.parentElement.classList.contains('delete')) {
		const id = e.target.parentElement.dataset.id;
		if (confirm('Are you sure?')) {
			http.delete(`http://localhost:3000/posts/${id}`)
				.then(data => {
					ui.showAlert('Post Removed', 'alert alert-success');
					getPosts();
				})
				.catch(err => console.log(err));
		}
	}
}

//fun@enableEdit
//enable edit state
function enableEdit(e) {
	e.preventDefault();
	if (e.target.parentElement.classList.contains('edit')) {
		const id = e.target.parentElement.dataset.id;

		const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;

		const body = e.target.parentElement.previousElementSibling.textContent;

		const data = {
			id,
			title,
			body
		}

		//fill form with current post
		ui.fillForm(data);
	}
}

//fun@cancelEdit
//cencel edit
function cancelEdit(e) {
	e.preventDefault();
	if (e.target.classList.contains('post-cancel')) {
		ui.changeFormState('add');
	}
}