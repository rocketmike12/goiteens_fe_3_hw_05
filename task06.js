const form = document.querySelector('form');
const aInput = document.querySelector('#a');
const bInput = document.querySelector('#b');
const operation = document.querySelector('#operation');
const textarea = document.querySelector('textarea');
const submitBtn = document.querySelector('button');

const calculateResult = function() {
    let a = Number.parseInt(aInput.value);
    let b = Number.parseInt(bInput.value);
    let o = operation.value;
    switch(o) {
        case '+':
            textarea.value = a + b;
            break;
        case '-':
            textarea.value = a - b;
            break;
        case '*':
            textarea.value = a * b;
            break;
        case '/':
            textarea.value = a / b;
            break;
    }
}

form.addEventListener('submit', (event) => {event.preventDefault()});
submitBtn.addEventListener('click', calculateResult);
