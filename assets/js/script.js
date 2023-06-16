let count = 0;

const div = document.createElement('div');
div.id = 'container';

const h1 = document.createElement('h1');
h1.classList.add('heading');
h1.textContent = "Counter";

const span = document.createElement('span');
span.id = 'value';
span.textContent = "0";

const btnContainer = document.createElement('div');
btnContainer.id = 'btnContainer';

const btnDecrease = document.createElement('button');
btnDecrease.classList.add('btn', 'decrease');
btnDecrease.textContent = "decrease";

const btnReset = document.createElement('button');
btnReset.classList.add('btn', 'reset');
btnReset.textContent = "reset";

const btnIncrease = document.createElement('button');
btnIncrease.classList.add('btn', 'increase');
btnIncrease.textContent = "increase";

div.append(h1, span, btnContainer);
btnContainer.append(btnDecrease, btnReset, btnIncrease);
document.getElementById('main').append(div);

const value = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = '#009432';
    } else if (count < 0) {
      value.style.color = '#ea2027';
    } else {
      value.style.color = '#262626';
    }
    value.textContent = count;
  });
});
