const form = document.querySelector('form');
const select = document.querySelector('select');
const submitBtn = document.querySelector('button');
const textarea = document.querySelector('textarea');

const displayDrink = function() {
    textarea.value = 'Обраний напій: ' + select.value;
}

form.addEventListener('submit', (event) => {event.preventDefault()});
submitBtn.addEventListener('click', displayDrink);
