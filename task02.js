const form = document.querySelector('form');
const submitBtn = document.querySelector('button');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const workDays = ['понеділок', 'вівторок', 'середа', 'четвер', 'п\'ятниця'];
const weekend = ['субота', 'неділя'];

const checkDay = function() {
    if(workDays.includes(input.value.toLowerCase())) {
        textarea.value = 'Робочий день';
    } else if(weekend.includes(input.value.toLowerCase())) {
        textarea.value = 'Вихідний';
    } else {
        textarea.value = 'Помилка: введіть валідний день тижня';
    }
}

form.addEventListener('submit', (event) => {event.preventDefault()});
submitBtn.addEventListener('click', checkDay);
