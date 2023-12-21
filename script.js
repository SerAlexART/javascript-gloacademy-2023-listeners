const button = document.querySelector('#btn');
const inputRange = document.querySelector('#range');
const inputText = document.querySelector('#text');
const eButton = document.querySelector('#square > #circle > #e_btn');
const square = document.querySelector('#square');
const circle = document.querySelector('#square > #circle');


let inputTextValue;




const changeInputTextValue = function (event) {
    inputTextValue = event.target.value;
};

const changeBackgroundColor = function () {
    square.style.backgroundColor = inputTextValue;
};

const changeInputRangeValue = function (event) {
    circle.style.width = event.target.value + '%';
    circle.style.height = event.target.value + '%';
};




inputText.addEventListener('input', changeInputTextValue);

button.addEventListener('click', changeBackgroundColor);

eButton.style.display = 'none';

inputRange.addEventListener('input', changeInputRangeValue);