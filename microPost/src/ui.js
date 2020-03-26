//cls@UI
class UI {
	//ots@constructor
	constructor() {
		this.post = document.querySelector('#posts');
		this.titleInput = document.querySelector('#title');
		this.bodyInput = document.querySelector('#body');
		this.idInput = document.querySelector('#id');
		this.postSubmit = document.querySelector('.post-submit');
		this.forState = 'add';
	}

	//mtd@showPosts
	showPosts(posts) {
		console.log(posts);
		let output = '';
		posts.forEach(post => {
			output += `
			<div class="card mb-3">
				<div class="card-body">
					<h4 class="card-title">${post.title}</h4>
					<p class="card-text">${post.body}</p>
					<!-- edit -->
					<a href="#" class="edit card-link" data-id="${post.id}">
					<i class="fa fa-pencil"></i>
					</a>
					<!-- delete -->
					<a href="#" class="delete card-link" data-id="${post.id}">
					<i class="fa fa-remove"></i>
					</a>
				</div>
			</div>
			`;
		});
		this.post.innerHTML = output;
	}

	//mtd@showAlert
	//show alert when data post
	showAlert(msg, clsName) {
		this.clearAlert();

		//create dom
		const div = document.createElement('div');
		div.className = clsName;
		div.appendChild(document.createTextNode(msg));
		//get parent
		const container = document.querySelector('.postContainer');
		//get posts
		const posts = document.querySelector('#posts');
		//insert the alert
		container.insertBefore(div, posts);

		//timeout
		setTimeout(() => {
			this.clearAlert();
		}, 3000);
	}

	//mtd@clearAlert
	//clear show alert msg
	clearAlert() {
		const currentAlert = document.querySelector('.alert');
		if (currentAlert) {
			currentAlert.remove();
		}
	}

	//mtd@clearFields
	//clear fields when data add to json file
	clearFields() {
		this.titleInput.value = '';
		this.bodyInput.value = '';
	}

	//mtd@fillForm
	//fill form to edit
	fillForm(data) {
		this.titleInput.value = data.title;
		this.bodyInput.value = data.body;
		this.idInput.value = data.id;

		this.changeFormState('edit');
	}

	//mtd@clearInput
	//clear ID from hidden input
	clearInput() {
		this.idInput.value = '';
	}

	//mtd@changeFormState
	//change edit state
	changeFormState(type) {
		if (type === 'edit') {
			this.postSubmit.textContent = 'Update Post';
			this.postSubmit.className = 'post-submit btn btn-warning btn-block';

			//create cancel button
			const button = document.createElement('button');
			button.className = 'post-cancel btn btn-dark btn-block mt-3';
			button.appendChild(document.createTextNode('Cancel Edit'));

			//get parent
			const parent = document.querySelector('.card-form');
			parent.insertAdjacentElement('beforeend', button);
		} else {
			this.postSubmit.textContent = 'Post It';
			this.postSubmit.className = 'post-submit btn btn-primary btn-block';

			//remove cancel button
			if (document.querySelector('.post-cancel')) {
				document.querySelector('.post-cancel').remove();
			}
			//clear id from hidden field
			this.clearInput();
			//clear text fields
			this.clearFields();
		}
	}

}

export const ui = new UI();