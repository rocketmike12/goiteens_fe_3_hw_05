const form = document.querySelector('form');
const submitBtn = document.querySelector('button');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

months = {
    1: '31',
    2: '28/29',
    3: '31',
    4: '30',
    5: '31',
    6: '30',
    7: '31',
    8: '31',
    9: '30',
    10: '31',
    11: '30',
    12: '31'
}

const checkMonth = function() {
    let month = Number(input.value)
    textarea.value = months[month];
}

form.addEventListener('submit', (event) => {event.preventDefault()});
submitBtn.addEventListener('click', checkMonth);
