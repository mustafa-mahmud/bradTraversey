class DataUI {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

class UI {
	//add book
	addBook(book) {
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
	}

	//show alert
	showAlert(msg, cla) {
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
	}

	//clear form
	clearForm(title, author, isbn) {
		title.value = '';
		author.value = '';
		isbn.value = '';
	}

	//del tr
	deleteTr(target) {
		if (target.className === 'del') {
			target.parentElement.parentElement.remove();
			this.showAlert('Book Removed', 'success');
		}
	}
}

//Local Storage
class LS {
	//add book
	static addBook(book) {
		let bookArr;
		if (localStorage.getItem('books') === null) {
			bookArr = [];
		} else {
			bookArr = JSON.parse(localStorage.getItem('books'));
		}
		bookArr.push(book);
		localStorage.setItem('books', JSON.stringify(bookArr));
	}
	//display book
	static displayBook() {
		const bookVal = JSON.parse(localStorage.getItem('books'));
		if (localStorage.getItem('books') !== null) {
			const ui = new UI();
			bookVal.forEach(cur => {
				ui.addBook(cur);
			})
		}
	}
	//delete book
	static delBook(target) {
		if (target.className === 'del') {
			let isbn = target.parentElement.previousElementSibling.textContent;
			let isbnLS = JSON.parse(localStorage.getItem('books'));
			isbnLS.forEach((cur, index) => {
				if (cur.isbn === isbn) {
					isbnLS.splice(index, 1);
				}
			})
			localStorage.setItem('books', JSON.stringify(isbnLS));
		}
	}
}

//Event listeneres
(function () {
	const form = document.getElementById('book-form');
	const bookList = document.getElementById('book-list');
	//form submit then pass data
	form.addEventListener('submit', passData);
	//click on delete button of tr
	bookList.addEventListener('click', removeTr);
	//when browser load
	document.addEventListener('DOMContentLoaded', LS.displayBook);
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

		//book to LS 
		LS.addBook(dataUI);

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

	//del from LS
	LS.delBook(e.target);
}