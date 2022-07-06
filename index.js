//порахувати кількість
const calculateTotalItems = () => {
	let items = 0;
	count.forEach(el => {
		const finalIt = Number(el.querySelector('.number').innerHTML);
		items += finalIt;
	});
	const finalItems = (document.getElementById('finalitems').innerHTML = `${items} ` + 'шт.');
};
//гривні
const calculateTotal = () => {
	let suma = 0;
	count.forEach(el => {
		const finalSum = Number(el.querySelector('.suma').innerHTML);
		suma += finalSum;
		const final = (document.getElementById('finalprice').innerHTML = `${suma}` + ' ' + 'грн');
		// console.log(suma);
		// console.log(finalSum);
	});
};

// взяти весь документ
const count = document.querySelectorAll('.card');
//
count.forEach(el => {
	const decreaseBtn = el.querySelector('.minus');
	const increaseBtn = el.querySelector('.plus');
	const number = el.querySelector('.number');
	const reset = el.querySelector('#button_trash');
	const sum = el.querySelector('#sum');
	const clear = document.querySelector('.button_clear');
	const mousePrice = Number(el.querySelector('.price').textContent);

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
		const suma = (sum.innerHTML = number.textContent * mousePrice);
		calculateTotalItems();
		calculateTotal();
	});

	//очистити кошик окремо
	const resetall = reset.addEventListener('click', () => {
		number.innerHTML = 0;
		sum.innerHTML = 0;
		calculateTotal();
		calculateTotalItems();
	});

	//очистити все!
	const clearAll = clear.addEventListener('click', () => {
		number.innerHTML = 0;
		sum.innerHTML = 0;
		calculateTotal();
		calculateTotalItems();
	});
});
