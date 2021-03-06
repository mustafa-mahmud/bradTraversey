// Storage Controller
const StorageCtrl = (function () {
	//Public mathods
	return {
		storeItem: function (item) {
			let items;
			//ck if any items in LS
			if (localStorage.getItem('items') === null) {
				items = [];
				//push new item
				items.push(item);
				//set LS
				localStorage.setItem('items', JSON.stringify(items));
			} else {
				//add all LS items
				items = JSON.parse(localStorage.getItem('items'));
				//add only new item
				items.push(item);
				//re-set LS
				localStorage.setItem('items', JSON.stringify(items));
			}
		},
		getItemsFromStorage: function () {
			let items;
			if (localStorage.getItem('items') === null) {
				items = [];
			} else {
				items = JSON.parse(localStorage.getItem('items'));
			}
			return items;
		},
		updateItemStorage: function (updateItem) {
			let items = JSON.parse(localStorage.getItem('items'));

			items.forEach((item, index) => {
				if (updateItem.id === item.id) {
					items.splice(index, 1, updateItem);
				}
			});

			//re-set LS
			localStorage.setItem('items', JSON.stringify(items));

		},
		deleteItemFromStorage: function (id) {
			let items = JSON.parse(localStorage.getItem('items'));

			items.forEach((item, index) => {
				if (id === item.id) {
					items.splice(index, 1);
				}
			});

			//re-set LS
			localStorage.setItem('items', JSON.stringify(items));
		},
		clearItemsFromStorage: function () {
			localStorage.removeItem('items');
		}
	}
})();


// Item Controller
const ItemCtrl = (function () {
	// Item Constructor
	const Item = function (id, name, calories) {
		this.id = id;
		this.name = name;
		this.calories = calories;
	}

	// Data Structure / State
	const data = {
		/* 	items: [
				// {id: 0, name: 'Steak Dinner', calories: 1200},
				// {id: 1, name: 'Cookie', calories: 400},
				// {id: 2, name: 'Eggs', calories: 300}
			], */
		items: StorageCtrl.getItemsFromStorage(),
		currentItem: null,
		totalCalories: 0
	}
	// Public methods
	return {
		getItems: function () {
			return data.items;
		},
		addItem: function (name, calories) {
			let ID;
			// Create ID
			if (data.items.length > 0) {
				ID = data.items[data.items.length - 1].id + 1;
			} else {
				ID = 0;
			}

			// Calories to number
			calories = parseInt(calories);

			// Create new item
			newItem = new Item(ID, name, calories);

			// Add to items array
			data.items.push(newItem);

			return newItem;
		},
		getItemById: function (id) {
			let found = null;
			// Loop through items
			data.items.forEach(function (item) {
				if (item.id === id) {
					found = item;
				}
			});
			return found;
		},
		updateItem: function (name, calories) {
			//calories to number
			calories = parseInt(calories);

			let found = null;
			data.items.forEach(item => {
				if (item.id === data.currentItem.id) {
					item.name = name;
					item.calories = calories;
					found = item;
				}
			});
			return found;
		},

		deleteItem: function (id) {
			//get ids
			const ids = data.items.map(item => {
				return item.id;
			});

			//get index
			const index = ids.indexOf(id);

			//remove item
			data.items.splice(index, 1);
		},
		clearAllItems: function () {
			data.items = [];
		},
		setCurrentItem: function (item) {
			data.currentItem = item;
		},
		getCurrentItem: function () {
			return data.currentItem;
		},
		getTotalCalories: function () {
			let total = 0;

			// Loop through items and add cals
			data.items.forEach(function (item) {
				total += item.calories;
			});

			// Set total cal in data structure
			data.totalCalories = total;

			// Return total
			return data.totalCalories;
		},
		logData: function () {
			return data;
		}
	}
})();


// UI Controller
const UICtrl = (function () {
	const UISelectors = {
		itemList: '#item-list',
		listItems: '#item-list li',
		addBtn: '.add-btn',
		updateBtn: '.update-btn',
		deleteBtn: '.delete-btn',
		clearBtn: '.clear-btn',
		backBtn: '.back-btn',
		itemNameInput: '#item-name',
		itemCaloriesInput: '#item-calories',
		totalCalories: '.total-calories'
	}

	// Public methods
	return {
		populateItemList: function (items) {
			let html = '';

			items.forEach(function (item) {
				html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
			});

			// Insert list items
			document.querySelector(UISelectors.itemList).innerHTML = html;
		},
		getItemInput: function () {
			return {
				name: document.querySelector(UISelectors.itemNameInput).value,
				calories: document.querySelector(UISelectors.itemCaloriesInput).value
			}
		},
		addListItem: function (item) {
			// Show the list
			document.querySelector(UISelectors.itemList).style.display = 'block';
			// Create li element
			const li = document.createElement('li');
			// Add class
			li.className = 'collection-item';
			// Add ID
			li.id = `item-${item.id}`;
			// Add HTML
			li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`;
			// Insert item
			document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
		},

		updateListItem: function (item) {
			let listItems = document.querySelectorAll(UISelectors.listItems);

			//turn node list into an array
			listItems = Array.from(listItems);

			listItems.forEach(li => {
				const liId = li.getAttribute('id');

				if (liId === `item-${item.id}`) {
					document.querySelector(`#${liId}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`;
				}
			});
		},

		deleteListItem: function (id) {
			const itemId = `#item-${id}`;
			const item = document.querySelector(itemId);
			item.remove();
		},
		removeItems: function () {
			let listItems = document.querySelectorAll(UISelectors.listItems);

			//turn into array
			listItems = Array.from(listItems);

			listItems.forEach(item => {
				item.remove();
			});
		},
		clearInput: function () {
			document.querySelector(UISelectors.itemNameInput).value = '';
			document.querySelector(UISelectors.itemCaloriesInput).value = '';
		},
		addItemToForm: function () {
			document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
			document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
			UICtrl.showEditState();
		},
		hideList: function () {
			document.querySelector(UISelectors.itemList).style.display = 'none';
		},
		showTotalCalories: function (totalCalories) {
			document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
		},
		clearEditState: function () {
			UICtrl.clearInput();
			document.querySelector(UISelectors.updateBtn).style.display = 'none';
			document.querySelector(UISelectors.deleteBtn).style.display = 'none';
			document.querySelector(UISelectors.backBtn).style.display = 'none';
			document.querySelector(UISelectors.addBtn).style.display = 'inline';
		},
		showEditState: function () {
			document.querySelector(UISelectors.updateBtn).style.display = 'inline';
			document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
			document.querySelector(UISelectors.backBtn).style.display = 'inline';
			document.querySelector(UISelectors.addBtn).style.display = 'none';
		},
		getSelectors: function () {
			return UISelectors;
		}
	}
})();


// App Controller
const App = (function (ItemCtrl, UICtrl, StorageCtrl) {
	// Load event listeners
	const loadEventListeners = function () {
		// Get UI selectors
		const UISelectors = UICtrl.getSelectors();

		// Add item event
		document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

		//Disable enter
		document.addEventListener('keypress', function (e) {
			if (e.keyCode === 13 || e.which === 13) {
				e.preventDefault();
			}
		});

		// Edit icon click event
		document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

		// Update item event
		document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

		// Delete item event
		document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

		// Back  event
		document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

		// Clear  event
		document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
	}

	// Add item submit
	const itemAddSubmit = function (e) {
		// Get form input from UI Controller
		const input = UICtrl.getItemInput();

		// Check for name and calorie input
		if (input.name !== '' && input.calories !== '') {
			// Add item
			const newItem = ItemCtrl.addItem(input.name, input.calories);

			// Add item to UI list
			UICtrl.addListItem(newItem);

			// Get total calories
			const totalCalories = ItemCtrl.getTotalCalories();
			// Add total calories to UI
			UICtrl.showTotalCalories(totalCalories);

			//Store in LS
			StorageCtrl.storeItem(newItem);

			// Clear fields
			UICtrl.clearInput();
		}

		e.preventDefault();
	}

	// edit item on click
	const itemEditClick = function (e) {
		if (e.target.classList.contains('edit-item')) {
			// Get list item id (item-0, item-1)
			const listId = e.target.parentNode.parentNode.id;

			// Break into an array
			const listIdArr = listId.split('-');

			// Get the actual id
			const id = parseInt(listIdArr[1]);

			// Get item
			const itemToEdit = ItemCtrl.getItemById(id);

			// Set current item
			ItemCtrl.setCurrentItem(itemToEdit);

			// Add item to form
			UICtrl.addItemToForm();
		}

		e.preventDefault();
	}

	const itemUpdateSubmit = function (e) {
		e.preventDefault()

		//get input value
		const input = UICtrl.getItemInput();

		//update item
		const updateItem = ItemCtrl.updateItem(input.name, input.calories);

		//update UI
		UICtrl.updateListItem(updateItem);

		// Get total calories
		const totalCalories = ItemCtrl.getTotalCalories();

		// Add total calories to UI
		UICtrl.showTotalCalories(totalCalories);

		//update LS
		StorageCtrl.updateItemStorage(updateItem);

		UICtrl.clearEditState();

	}

	//delete item
	const itemDeleteSubmit = function (e) {
		e.preventDefault();

		//get current item
		const currentItem = ItemCtrl.getCurrentItem();

		//delete from data structure
		ItemCtrl.deleteItem(currentItem.id)

		//delete from UI
		UICtrl.deleteListItem(currentItem.id);

		// Get total calories
		const totalCalories = ItemCtrl.getTotalCalories();

		// Add total calories to UI
		UICtrl.showTotalCalories(totalCalories);

		//delete from LS
		StorageCtrl.deleteItemFromStorage(currentItem.id);

		UICtrl.clearEditState();

	}

	//clear item
	const clearAllItemsClick = function (e) {
		e.preventDefault();

		//delete all items from data structure
		ItemCtrl.clearAllItems();

		//remove from UI
		UICtrl.removeItems();

		// Get total calories
		const totalCalories = ItemCtrl.getTotalCalories();

		// Add total calories to UI
		UICtrl.showTotalCalories(totalCalories);

		//clear all items from LS
		StorageCtrl.clearItemsFromStorage();

		//hide ul
		UICtrl.hideList();

	}

	// Public methods
	return {
		init: function () {
			// Clear edit state / set initial set
			UICtrl.clearEditState();

			// Fetch items from data structure
			const items = ItemCtrl.getItems();

			// Check if any items
			if (items.length === 0) {
				UICtrl.hideList();
			} else {
				// Populate list with items
				UICtrl.populateItemList(items);
			}

			// Get total calories
			const totalCalories = ItemCtrl.getTotalCalories();
			// Add total calories to UI
			UICtrl.showTotalCalories(totalCalories);

			// Load event listeners
			loadEventListeners();
		}
	}

})(ItemCtrl, UICtrl, StorageCtrl);

// Initialize App
App.init();