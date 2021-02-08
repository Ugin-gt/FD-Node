'use strict'
// sample 1
const square1 = document.querySelector('#square1');
const square2 = document.querySelector('#square2');
const square3 = document.querySelector('#square3');

square1.addEventListener('click', function (e) {
  clickHandlerSquare(e);
  alert(1);
}, true);
square2.addEventListener('click', function (e) {
  clickHandlerSquare(e);
  alert(2);
}, true);
square3.addEventListener('click', function (e) {
  clickHandlerSquare(e);
  alert(3);
});

function clickHandlerSquare(e) {
  console.log(this, e.target);
}


//Обработчик кнопки по одинарному и двойному клику с выводом Alert

const buttonClick = document.querySelector('button');

let clicks = 0;
buttonClick.onclick = function () {
  clicks++;
  if (clicks >= 2) {
    alert('Double click');
    clicks = 0;
    return;
  }
  setTimeout(() => {
    if (clicks === 1) {
      alert('Single click');
    }
    clicks = 0;}, 400);
}

// const buttonAdd = document.querySelector('.forClick')
// const squareContainer = document.querySelector('.addSquare')
// // console.log(buttonAdd);
// buttonAdd.addEventListener('click', clickHandler);
// squareContainer.addEventListener('click', squareClickHandler)


// function squareClickHandler(e) {
//   const { target } = e;
//   if (target.parentNode === squareContainer)
//     console.log(target.style.backgroundColor);
// };

// function clickHandler() {
//   squareContainer.appendChild(createSquare());
// }


// function createSquare() {
//   const randColor = '#' + ('00' + Math.floor(Math.random() * 16777215).toString(16).substr(-6));
//   const square = document.createElement('div');
//   square.style.backgroundColor = randColor;
//   return square;
// };


// const textContainer = document.querySelector('.textContainer');
// const listContainer = document.querySelector('.listContainer');

// // document.addEventListener('mouseover')
