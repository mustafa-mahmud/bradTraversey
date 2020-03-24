//re = /hello/g; //g=global search

//console.log(re);
//console.log(re.source);

//exec()-return array if true, or null
//const res = re.exec('mithu hello world');
//console.log(res);


//test()-return true or false
//const result = re.test('Hello');
//console.log(result);

//match()-return array or null
/* const str = 'Hello World!';
const result = str.match(re);
console.log(result); */

//search()-return index of the first match, if not true then returns -1;
/* const str = 'Hello World';
const result = str.search(re);
console.log(result); */

//replace()-return new string
/* const str = 'Hello World';
const result = str.replace(re, 'Hi');
console.log(result); */
/* 
let re;
re = /hello/;
re = /hello/i;

//Metacharacter Symbols
re = /^h/i; //must start with h
re = /World$/i; //must ends with h
re = /^hello$/i; //must starts with h and ends with o
re = /^h.llo$/i; //in . any character can pass
re = /^h*llo$/i; //in * any character can pass 0 to z
re = /gre?a?y/i; //optional character e or a
re = /gre?a?y\?/i; //escaping character

//Brackets[] - character sets
re = /gr[ae]y/i; //must be an A or E
re = /[GF]ray/; //must be an G or F
re = /[A-Za-z]ray/; //match any character with upper or lowercase
re = /[A-Za-z]ray/; //must be an G or F 
re = /[0-9]ray/; //must be an 0-9
re = /[0-4]ray/; //must be an 0-9

//Braces {} - Quantifiers
re = /Hel{2}o/i; //must be 2 l
re = /Hel{2,4}o/i; //must range between 2 to 4 l
re = /Hel{2,}o/i; //atleast 2 ll but above can be true

//Parentheses () - Grouping
re = /^([0-9]x){3}$/;

//Shorthand Character 
re = /\w/; //word with alpha character or numeric
re = /\w+/; //word with alpha character or numeric
re = /\W/; //Non character of alpha or numeric
re = /\d+/; //match any digit(0-9)
re = /\D/; //not digit match
re = /\s/; //space can match
re = /\S/; //Non space can match
re = /Hell\b/i; //word boundary

//Assertions
re = /x(?=z)/; // match x only if followed by y
re = /x(?!z)/; // match x only if not followed by y


const str = 'xasdf';

function reTest(re, str) {
	if (re.test(str)) {
		console.log(`MATCHED`);

	} else {
		console.log(`NOT MATCHED.....`);

	}
}

reTest(re, str); */


//Iterator
/* function nameIterator(names) {
	let nextIndex = 0;
	return {
		next: function () {
			return nextIndex < names.length ? {
				value: names[nextIndex++],
				done: false
			} : {
				done: true
			}
		}
	}
}

//Create an array of names
const namesArr = ['Jack', 'Jill', 'John'];

//init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().done);
console.log(names.next().done); */

//Generator
/* function* sayNames() {
	yield 'Jack';
	yield 'Jill';
	yield 'John';
}

const name = sayNames();
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().done); */

//ID creator
/* function* createIDs() {
	let index = 0;
	while (true) {
		yield index++;
	}
}

const gen = createIDs();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); */

//Symbols 
//const sym1 = Symbol();
//const sym2 = Symbol('sym2');

//console.log(typeof sym2); 

//Destructuring
let a, b;
[a, b] = [100, 200];
//rest pattern
[c, d, ...beti] = [100, 200, 300, 400, 500];
//console.log(beti);

({
	a,
	b,
	...rest
} = {
	a: 100,
	b: 200,
	c: 300,
	d: 400
});

//console.log(rest);

//Array Destructuring
/* const people = ['John', 'Beth', 'Mike'];

const [per1, per2, per3] = people;
console.log(per3); */

//Parse array returned from function
/* function getPeople() {
	return ['John', 'Beth', 'Mike'];
}

let per1, per2, per3;
[per1, per2, per3] = getPeople();
console.log(per1); */

//Object Destructring
/* const person = {
	name: 'John',
	age: 32,
	city: 'Dhaka',
	gender: 'male',
	func: function () {
		console.log('Hello ');

	}
};

const {
	name,
	age,
	city,
	gender,
	func
} = person;
console.log(city, gender);
func(); */

//Maps
const map1 = new Map();

//set map() keys
const key1 = 'some string',
	key2 = {},
	key3 = function () {};

//set map() values
map1.set(key1, 'Value 1');
map1.set(key2, 'Value 2');
map1.set(key3, 'Value 3');
/* 
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3)); */

//map() iteration with key value
/* 
for (let [key, value] of map1) {
	console.log(`Key is ${key}, Value is ${value}`);
} */

//map() iteration only key
/* for (let key of map1.keys()) {
	console.log(`Key is ${key}`);

} */

//map() iteration only value
/* for (let values of map1.values()) {
	console.log(values);

} */

//map() iteration with forEach() with key and value
/* map1.forEach((value, key) => {
	console.log(`Key is ${key}, Value is ${value}`);
}); */

//console.log(map1);

//convert map() to array
/* const arr = Array.from(map1);
console.log(arr[1][1]); */

//SETS()
//SETS() -store any type of unique value
//Add values
/* const set1 = new Set();
set1.add(100);
set1.add('A String');
set1.add({
	name: 'John'
});
set1.add(true);
set1.add(function () {});
set1.add(100);

console.log(set1);

const set2 = new Set([1, 'String', true]);
console.log(set2); */
/* console.log(set1.has(100)); */

//Basic structure

//standard module patterns
/* const UICtrl = (function () {
	let text = 'Hello World';

	const changeText = function () {
		const element = document.querySelector('.patterns');
		element.textContent = text;
	}

	return {
		callChangeText: function () {
			changeText();
			console.log(text);

		}
	}
})();

UICtrl.callChangeText(); */

//revealing module pattern
/* const itemCtrl = (function () {
	let data = [];

	function add(item) {
		data.push(item);
	}

	function get(id) {
		return data.find(item => {
			return item.id === id;
		});
	}

	return {
		add: add,
		get: get
	}
})();

itemCtrl.add({
	id: 1,
	name: 'John'
});
console.log(itemCtrl.get(1)); */
/* 
const singleton = (function () {
	let instance;

	function createInstance() {
		const object = new Object({
			name: 'John'
		});
		return object;
	}

	return {
		getInstance: function () {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		}
	}
})();

const instanceA = singleton.getInstance();
console.log(instanceA); */

//Factory pattern
/* function MemberFactory() {
	this.createMember = function (name, type) {
		let member;

		if (type === 'simple') {
			member = new SimpleMembership(name);
		} else if (type === 'standard') {
			member = new StandardMembership(name);
		} else if (type === 'super') {
			member = new SuperMembership(name);
		}

		member.type = type;

		member.define = function () {
			console.log(`${this.name}(${this.type}):${this.cost}`);
		}
		return member;
	}
}

const SimpleMembership = function (name) {
	this.name = name;
	this.cost = '$5';
}
const StandardMembership = function (name) {
	this.name = name;
	this.cost = '$15';
}
const SuperMembership = function (name) {
	this.name = name;
	this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('John Doe2', 'standard'));
members.push(factory.createMember('John Doe3', 'super'));

members.forEach(member => {
	member.define();
}) */

//Observer Pattern
/* function EventObserver() {
	this.observers = [];
}

EventObserver.prototype = {
	subscribe: function (fn) {
		this.observers.push(fn);
		console.log(`You are now subscribed to ${fn.name}`);
	},
	unsubscribe: function (fn) {
		this.observers = this.observers.filter(function (item) {
			if (item !== fn) {
				return item
			}
		});
		console.log(`You are now unsubscribe from ${fn.name}`);

	},
	fire: function () {
		this.observers.forEach(function (item) {
			item.call();
		});
	}
}

const click = new EventObserver();

//event listeners
document.querySelector('.sub-ms').addEventListener('click', function () {
	click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
	click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
	click.fire();
});

//click handler
const getCurMilliseconds = function () {
	console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);

} */
let b = 10;
console.log(b);