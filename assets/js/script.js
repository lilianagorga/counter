let count = 0;

const container = document.createElement('div');
container.id = 'container';

const counterHeader = document.createElement('h1');
counterHeader.classList.add('heading');
counterHeader.textContent = "Counter";

const counterNumber = document.createElement('span');
counterNumber.id = 'value';
counterNumber.textContent = "0";

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

container.append(counterHeader, counterNumber, btnContainer);
btnContainer.append(btnDecrease, btnReset, btnIncrease);
document.getElementById('main').append(container);

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
