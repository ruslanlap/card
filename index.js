const decreaseBtn = document.querySelector('#button_decrease');
const increaseBtn = document.querySelector('#button_increase');
let number = document.querySelector('.number');
const reset = document.querySelector('#button_trash');
window.addEventListener('click', function (event) {
	// console.log(event.target);
});

const mousePrice = 1000;

decreaseBtn.addEventListener('click', () => {
	if (number.innerHTML > 1) {
		const sumaAdd = number.innerHTML--;
		sum.innerHTML = sum.innerHTML - mousePrice;
	}
});

increaseBtn.addEventListener('click', () => {
	number.innerHTML++;
	sum.innerHTML = number.innerHTML * mousePrice;
});

reset.addEventListener('click', () => {
	number.innerHTML = 1;
	sum.innerHTML = mousePrice;
});

const sum = document.querySelector('#sum');
const num = document.querySelector('.number');

//клавіатура
const decreaseBtnBoard = document.querySelector('#button_decrease_board');
const increaseBtnBoard = document.querySelector('#button_increase_board');
const numberBoard = document.querySelector('.number2');
const resetBoard = document.querySelector('#button_trash_board');
window.addEventListener('click', function (event) {
	// console.log(event.target);
});

const boardPrice = 2000;

decreaseBtnBoard.addEventListener('click', () => {
	if (numberBoard.innerHTML > 1) {
		const sumaAdd = numberBoard.innerHTML--;
		sumBoard.innerHTML = sumBoard.innerHTML - boardPrice;
	}
});

increaseBtnBoard.addEventListener('click', () => {
	numberBoard.innerHTML++;
	sumBoard.innerHTML = numberBoard.innerHTML * boardPrice;
});

resetBoard.addEventListener('click', () => {
	numberBoard.innerHTML = 1;
	sumBoard.innerHTML = boardPrice;
});
const sumBoard = document.querySelector('#sum_board');

// екран
const decreaseBtnScreen = document.querySelector('#button_decrease_screen');
const increaseBtnScreen = document.querySelector('#button_increase_screen');
const numberScreen = document.querySelector('.number3');
const resetScreen = document.querySelector('#button_trash_screen');
window.addEventListener('click', function (event) {
	// console.log(event.target);
});

const ScreenPrice = 4999;

decreaseBtnScreen.addEventListener('click', () => {
	if (numberScreen.innerHTML > 1) {
		const sumaAdd = numberScreen.innerHTML--;
		sumScreen.innerHTML = sumScreen.innerHTML - ScreenPrice;
	}
});

increaseBtnScreen.addEventListener('click', () => {
	numberScreen.innerHTML++;
	sumScreen.innerHTML = numberScreen.innerHTML * ScreenPrice;
});

const sumScreen = document.querySelector('#sum_screen');

// додати кнопкою в в кошик
const finalPrice = document.querySelector('#finalprice');
const finalItems = document.querySelector('#items');
const addToCart = document.querySelector('#addtocart');

resetScreen.addEventListener('click', () => {
	numberScreen.innerHTML = 1;
	sumScreen.innerHTML = ScreenPrice;
	finalPrice = finalPrice.innerHTML = 0 + ' ' + 'грн.';
	finalItems = finalItems.innerHTML = 0 + ' ' + 'шт.';
});
resetScreen.addEventListener('click', () => {
	numberScreen.innerHTML = 1;
	sumScreen.innerHTML = ScreenPrice;
	finalItems = finalItems.innerHTML = 0 + ' ' + 'шт.';
});

addToCart.addEventListener('click', () => {
	finalPrice.innerHTML = sumScreen.innerHTML + " "+"грн.";
	finalItems.innerHTML = numberScreen.innerHTML + " "+"шт.";

});
addToCart.addEventListener('click', () => {
	finalPrice.innerHTML = sumScreen.innerHTML + " "+"грн.";
	finalItems.innerHTML = numberScreen.innerHTML + " "+"шт.";

});

// додати кнопкою в в кошик кнопка 2

const finalPriceBoard = document.querySelector('#finalprice');
const finalItemsBoard = document.querySelector('#items');
const addToCartBoard = document.querySelector('#addtocartsecond');

resetBoard.addEventListener('click', () => {
	numberBoard.innerHTML = 1;
	sumScreen.innerHTML = boardPrice;
	finalPriceBoard = finalPriceBoard.innerHTML = 0 + ' ' + 'грн.';
	finalItemsBoard = finalItemsBoard.innerHTML = 0 + ' ' + 'шт.';
});
resetBoard.addEventListener('click', () => {
	numberBoard.innerHTML = 1;
	sumBoard.innerHTML = boardPrice;
	finalItemsBoard = finalItemsBoard.innerHTML = 0 + ' ' + 'шт.';
});

addToCartBoard.addEventListener('click', () => {
	finalPriceBoard.innerHTML = sumBoard.innerHTML + ' ' + 'грн.';
	finalItemsBoard.innerHTML = numberBoard.innerHTML + ' ' + 'шт.';
});

addToCartBoard.addEventListener('click', () => {
	finalBoard.innerHTML = sumBoard.innerHTML + ' ' + 'грн.';
	finalItemsBoard.innerHTML = numberBoard.innerHTML + ' ' + 'шт.';
});

//сумувати всі значення у підсумку

const final = document.querySelector('#finalprice');
const finalI = document.querySelector('#items');
const addToCartAll = document.querySelectorAll('.addtocart');

addToCartAll.addEventListener('click', () => {
	finalI.innerHTML = Number(sumBoard.innerHTML) + Number(sumScreen.innerHTML) + Number(sum.innerHTML)+ ' ' + 'грн.';
	final.innerHTML = Number(numberBoard.innerHTML)+Number(numberScreen.innerHTML)+ Number(number.innerHTML)+' ' + 'шт.';
});
