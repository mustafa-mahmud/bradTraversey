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

reTest(re, str);