//UI variables
//submit part
const form = document.getElementById('loan-form');
const inputAmount = document.getElementById('amount');
const inputInterest = document.getElementById('interest');
const inputYears = document.getElementById('years');

//loader part
const loading = document.getElementById('loading');

//result part
const result = document.getElementById('result');
const inputMonthlyPayment = document.getElementById('monthly-payment');
const inputPayment = document.getElementById('total-payment');
const inputGetInterest = document.getElementById('total-interest');

//Registration event listeners
(function () {
	form.addEventListener('submit', function (e) {
		e.preventDefault();
		//hide result box
		result.style.display = 'none';
		//show loader
		loading.style.display = 'block';
		//calculate loan and show on result box
		setTimeout(calcLoan, 3000);
	});
})();

function calcLoan() {
	//hide loading gif
	loading.style.display = 'none';
	//collect value from input fields
	const getAmount = parseFloat(inputAmount.value);
	const getInterest = parseFloat(inputInterest.value);
	const getYears = parseFloat(inputYears.value);

	//processing collected input values
	const calcInterest = getInterest / 100 / 12;
	const calcPayment = getYears * 12;

	//monthly payments
	const calcPow = Math.pow(1 + calcInterest, calcPayment);
	const monthly = (getAmount * calcPow * calcInterest) / (calcPow - 1);

	//show result on result input fields
	inputMonthlyPayment.value = monthly.toFixed(2);
	inputPayment.value = (monthly * calcPayment).toFixed(2);
	inputGetInterest.value = ((monthly * calcPayment) - getAmount).toFixed(2);
	result.style.display = 'block';

	if (inputMonthlyPayment.value === '') {
		errorFunc();
	}
}

function errorFunc() {
	result.style.display = 'none';
	document.querySelector('.alert').style.display = 'block';
	setTimeout(() => {
		document.querySelector('.alert').style.display = 'none';
	}, 3000);
}