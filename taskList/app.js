//Define UI vars
const taskFrom = document.querySelector('#task-from');
const taskInput = document.querySelector('#task');
const filterInput = document.querySelector('#filter');
const clearTaskBtn = document.querySelector('.clear-tasks');
const collection = document.querySelector('ul.collection');


//Define variables

//Load all event listeners
allEventLisneters();

//allEventLisneters func decoration
function allEventLisneters() {
	//DOM lad event
	document.addEventListener('DOMContentLoaded', getTasks);
	//form submit
	taskFrom.addEventListener('submit', getInputValue);
	//ul.collection
	collection.addEventListener('click', removeTask);
	//clearTasks
	clearTaskBtn.addEventListener('click', clearTasks);
	//filter
	filterInput.addEventListener('keyup', filterItem);
}

//Get tasks from LS
function getTasks() {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach(function (task) {
		collection.innerHTML += `<li class="collection-item">${task}
								<a href="#" class="delete-item secondary-content">
									<i class="fa fa-remove"></i>
								</a>
							</li>`;
	});
}

//getInputValue function decoration
function getInputValue(e) {
	e.preventDefault();
	if (taskInput.value === '') {
		alert('Pls Add Task!!!');
	} else {
		addItem();
	}
}

//addItem func decoration
function addItem() {
	collection.innerHTML += `<li class="collection-item">${taskInput.value}
								<a href="#" class="delete-item secondary-content">
									<i class="fa fa-remove"></i>
								</a>
							</li>`;

	//Store in LS
	storeTaskInLocalStorage(taskInput.value);

	//clear input value
	taskInput.value = '';
}

//Store Task
function storeTaskInLocalStorage(task) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks));

}

//removeTask decoration
function removeTask(e) {
	const aLink = e.target.parentElement;
	if (aLink.classList.contains('delete-item')) {
		if (confirm('Are You Sure to Delete this?')) {
			aLink.parentElement.remove();

			//remove from LS
			removeFromLS(aLink.parentElement);

		}
	}

}

//removeFromLS func
function removeFromLS(removeItem) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach(function (task, index) {
		if (removeItem.textContent.trim() === task) {
			tasks.splice(index, 1);
		}
	});

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

//clearTasks decoration
function clearTasks() {
	if (confirm('Are You Sure to Delete All?')) {
		collection.innerHTML = '';
		localStorage.clear();
	}
}

//filterItem func decoration
function filterItem(e) {
	const userValue = e.target.value.toLowerCase();
	const allLi = document.querySelectorAll('.collection-item');

	allLi.forEach(cur => {
		if (cur.textContent.toLowerCase().indexOf(userValue) != -1) {
			cur.style.display = 'block';
		} else {
			cur.style.display = 'none';
		}
	});
}