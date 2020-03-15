//Name Validated
document.getElementById('name').addEventListener('blur', validatedName);
//Zip Validated
document.getElementById('zip').addEventListener('blur', validatedZip);
//Email Validated
document.getElementById('email').addEventListener('blur', validatedEmail);
//Phone Validated
document.getElementById('phone').addEventListener('blur', validatedPhone);


//Name Func
function validatedName() {
	const name = document.getElementById('name');
	const re = /^[a-zA-Z]{2,10}$/;

	if (!re.test(name.value)) {
		name.classList.add('is-invalid');
	} else {
		name.classList.remove('is-invalid');
	}
}

//Zip Func
function validatedZip() {
	const zip = document.getElementById('zip');
	const re = /^[0-9]{5}(-[0-9]{4})?$/;

	if (!re.test(zip.value)) {
		zip.classList.add('is-invalid');
	} else {
		zip.classList.remove('is-invalid');
	}
}

//Email Func
function validatedEmail() {
	const email = document.getElementById('email');
	const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$/;

	if (!re.test(email.value)) {
		email.classList.add('is-invalid');
	} else {
		email.classList.remove('is-invalid');
	}
}

//Phone Func
function validatedPhone() {
	const phone = document.getElementById('phone');
	const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

	if (!re.test(phone.value)) {
		phone.classList.add('is-invalid');
	} else {
		phone.classList.remove('is-invalid');
	}
}