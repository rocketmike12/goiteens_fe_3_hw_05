const form = document.querySelector('form');
const submitBtn = document.querySelector('button');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const checkColor = function() {
    let color = input.value.toLowerCase();
    if(color == 'червоний') {
        textarea.value = 'стоп';
    } else if(color == 'зелений') {
        textarea.value = 'йти';
    } else if(color == 'жовтий') {
        textarea.value = 'чекати';
    } else {
        textarea.value = '';
    }
}

form.addEventListener('submit', (event) => {event.preventDefault()});
submitBtn.addEventListener('click', checkColor);
