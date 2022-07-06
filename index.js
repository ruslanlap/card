// // порахувати кількість штук
// const calculateTotalItems = () => {
// 	let items = 0;
// 	count.forEach(el => {
// 		const finalIt = Number(el.querySelector('.number').innerHTML);
// 		items += finalIt;
// 	});
// 	const finalItems = (document.getElementById('finalitems').innerHTML = `${items} ` + 'шт.');
// };
// порахувати кількість штук
const calculateTotalItems = () => {
	let items = 0;
	let suma = 0;
	count.forEach(el => {
		const finalIt = Number(el.querySelector('.number').innerHTML);
		const finalSum = Number(el.querySelectorAll('.sum').innerHTML);
		items += finalIt;
		suma += finalSum;
	});
	const finalItems = (document.getElementById('finalitems').innerHTML = `${items} ` + 'шт.');
	const final = (document.getElementById('finalprice').innerHTML = `${suma}`);
};
//гривні
const calculateTotal = () => {
	let suma = 0;
	count.forEach(el => {
		const finalSum = Number(el.querySelectorAll('.sum'));
		suma += finalSum;
	});
	const final = (document.getElementById('finalprice').innerHTML = `${suma}`);
};

// взяти весь документ
const count = document.querySelectorAll('.card');

count.forEach(el => {
	const decreaseBtn = el.querySelector('.minus');
	const increaseBtn = el.querySelector('.plus');
	const number = el.querySelector('.number');
	const reset = el.querySelector('#button_trash');
	const sum = el.querySelector('#sum');
	const mousePrice = 1000;

	decreaseBtn.addEventListener('click', () => {
		if (number.innerHTML > 0) {
			const sumaAdd = number.innerHTML--;
			sum.innerHTML -= mousePrice;
			calculateTotalItems();
			calculateTotal();
		}
	});

	increaseBtn.addEventListener('click', () => {
		number.innerHTML++;
		sum.innerHTML = number.textContent * mousePrice;
		calculateTotalItems();
		calculateTotal();
	});

	reset.addEventListener('click', () => {
		number.innerHTML = 0;
		sum.innerHTML = 0;
		calculateTotal();
		calculateTotalItems();
	});
});
