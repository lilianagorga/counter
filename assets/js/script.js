let count = 0;
const value = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')) {
      count--;
    } else if(styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    if(count > 0) {
      value.style.color = '#009432';
    }
    if(count < 0) {
      value.style.color = '#ea2027';
    }
    if(count === 0) {
      value.style.color = '#262626';
    }
    value.textContent = count;
  });
});