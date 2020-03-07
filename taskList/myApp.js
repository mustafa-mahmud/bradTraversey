//UI variables
const from = document.getElementById('task-from');
const inputTask = document.getElementById('task');
const inputFilter = document.getElementById('filter');
const ulCollection = document.querySelector('.collection');
const btnClearTask = document.querySelector('.clear-tasks');

//Others variables
let storeArr = [];

//All add event listener
(function () {
	//form submit
	from.addEventListener('submit', addTask);
	//click on task
	ulCollection.addEventListener('click', editDelete);
	//clear task
	btnClearTask.addEventListener('click', clearTask);
	//filter task
	inputFilter.addEventListener('keyup', filterTask);
	//DOM loaded then show LS in task
	document.addEventListener('DOMContentLoaded', loadLS);
})();

//add task to task box
function addTask(e) {
	e.preventDefault();
	//add data to task box
	if (inputTask.value === '') {
		alert('Pls put some data');
	} else {
		let data = localStorage.getItem('store');

		if (data !== null) {
			storeArr = JSON.parse(data);
		}

		storeArr.push(inputTask.value)
		localStorage.setItem('store', JSON.stringify(storeArr));

		const editItem = document.querySelectorAll('.edit-item');

		if (inputTask.getAttribute('data-edit') === 'editMe') {
			editItem.forEach((cur) => {
				if (cur.getAttribute('data-edit') !== null) {
					cur.parentElement.innerHTML = `${inputTask.value}<a href="#" class="delete-item"><i class="fa fa-remove"></i> </a> <a href="#"	class="edit-item"><i class="fa fa-pencil"></i></a>`;
					cur.removeAttribute('data-edit');
				}
			});

			let storeArr2 = [];
			localStorage.removeItem('store');
			const allLi2 = ulCollection.querySelectorAll('li');
			allLi2.forEach(res =>
				storeArr2.push(res.textContent)
			)
			localStorage.setItem('store', JSON.stringify(storeArr2));

			inputTask.removeAttribute('data-edit');
		} else {
			let getLS = JSON.parse(localStorage.getItem('store'));
			let lastArr = getLS.splice(getLS.length - 1, 1);
			let str = `<li class="collection-item"> ${lastArr[0]} <a href="#" class="delete-item"><i class="fa fa-remove"></i></a><a href="#" class="edit-item"><i class="fa fa-pencil"></i></a></li>`;
			ulCollection.innerHTML += str;
		}
	}

	//clear input field
	inputTask.value = '';
	//focus input field
	inputTask.focus();
}

//load LS when browser re-load/first load
function loadLS() {
	if (localStorage.getItem('store') !== null) {
		let getLS = JSON.parse(localStorage.getItem('store'));
		getLS.forEach(res => {
			let str = `<li class="collection-item"> ${res} <a href="#" class="delete-item"><i class="fa fa-remove"></i></a><a href="#" class="edit-item"><i class="fa fa-pencil"></i></a></li>`;
			ulCollection.innerHTML += str;
		})

	}
}

//filter task func
function filterTask() {
	const allLi = document.querySelectorAll('.collection li');
	allLi.forEach(cur => {
		let str = cur.textContent.trim();

		if (str.indexOf(inputFilter.value) !== -1) {
			cur.style.display = 'flex';
		} else {
			cur.style.display = 'none';
		}
	})
}

//clear task function
function clearTask() {
	if (ulCollection.children.length) {
		if (confirm('Sure to Delete All??')) {
			localStorage.removeItem('store');
			ulCollection.innerHTML = '';
		}
	} else {
		alert('Here are no data!');
	}

}


//edit or delete task
function editDelete(e) {
	e.preventDefault();

	let process = e.target.parentElement;
	if (process.classList.contains('edit-item')) {
		editTask(process);
	} else if (process.classList.contains('delete-item')) {
		deleteTask(process);
	}

}

//edit task
function editTask(edit) {
	edit.setAttribute('data-edit', 'editMe');
	inputTask.focus();
	inputTask.value = edit.parentElement.textContent.trim();
	inputTask.setAttribute('data-edit', 'editMe');
}

//delete task
function deleteTask(del) {
	if (confirm('Sure to Delete?')) {
		del.parentElement.remove();
		let ulLi = ulCollection.querySelectorAll('li');
		let afterDel = [];

		ulLi.forEach(cur => {
			afterDel.push(cur.textContent);
		})
		localStorage.setItem('store', JSON.stringify(afterDel));
	}
}