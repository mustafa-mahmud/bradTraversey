//UI data
function DataUI(title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
};

//UI
function UI() {};

//add book to table
UI.prototype.addBook = function (book) {
	const bookList = document.getElementById('book-list');
	//create tr
	const tr = document.createElement('tr');
	tr.innerHTML = `
	<td>${book.title}</td>
	<td>${book.author}</td>
	<td>${book.isbn}</td>
	<td><a href='#' class='del'>x</a></td>
	`;
	bookList.appendChild(tr);
};

//clear form
UI.prototype.clearForm = function (title, author, isbn) {
	title.value = '';
	author.value = '';
	isbn.value = '';
};

//show alert msg
UI.prototype.showAlert = function (msg, cla) {
	const container = document.querySelector('.container');
	const form = document.getElementById('book-form');
	//create div
	const div = document.createElement('div');
	div.innerHTML = `
	<a href = '#'
	class = 'alert ${cla}'>${msg}</a>
	`;
	div.style.marginBottom = '20px';
	container.insertBefore(div, form);

	//hide alert msg after 3s
	setTimeout(() => {
		div.remove();
	}, 3000)
};

//del tr
UI.prototype.deleteTr = function (target) {
	if (target.className === 'del') {
		target.parentElement.parentElement.remove();
		this.showAlert('Book Removed', 'success');
	}
};

//Event listeneres
(function () {
	const form = document.getElementById('book-form');
	const bookList = document.getElementById('book-list');
	form.addEventListener('submit', passData);
	bookList.addEventListener('click', removeTr);
})();

//add book
function passData(e) {
	e.preventDefault();
	//collect ui
	const inputTitle = document.getElementById('title');
	const inputAuthor = document.getElementById('author');
	const inputIsbn = document.getElementById('isbn');

	const dataUI = new DataUI(inputTitle.value, inputAuthor.value, inputIsbn.value);

	const ui = new UI();

	//ck is form fields empty
	if (inputTitle.value === '' || inputAuthor.value === '' || inputIsbn.value === '') {
		ui.showAlert('Pls fill the input field', 'error');

	} else {
		//add book to table
		ui.addBook(dataUI);

		//clear form after add book
		ui.clearForm(inputTitle, inputAuthor, inputIsbn);

		//show alet msg after book add successfully
		ui.showAlert('Book Addeded', 'success');
	}

}

//remove book
function removeTr(e) {
	e.preventDefault();

	const ui = new UI();

	//del tr
	ui.deleteTr(e.target);
}