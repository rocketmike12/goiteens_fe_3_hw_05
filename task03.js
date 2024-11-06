const form = document.querySelector('form');
const submitBtn = document.querySelector('button');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const checkMonth = function() {
    let month = Number(input.value)
    if([1, 2, 12].includes(month)) {
        textarea.value = 'Winter';
    } else if([3, 4, 5].includes(month)) {
        textarea.value = 'Spring';
    } else if([6, 7, 8].includes(month)) {
        textarea.value = 'Summer';
    } else if([9, 10, 11].includes(month)) {
        textarea.value = 'Autumn';
    } else {
        textarea.value = 'Error';
    }
}

form.addEventListener('submit', (event) => {event.preventDefault()});
submitBtn.addEventListener('click', checkMonth);
