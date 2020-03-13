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

let re;
re = /hello/;
re = /hello/i;

//Metacharacter Symbols
re = /^h/i;

const str = 'Hello World';
const result = re.exec(str);
console.log(result);


function reTest(re, str) {
	if (re.test(str)) {
		console.log(`${str} matched ${re.source}`);

	} else {
		console.log(`${str} done NOT matched ${re.source}`);

	}
}

reTest(re, str);