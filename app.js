console.log ('Hello world!');

const button = document.getElementById ('name-button');
const input = document.getElementById ('name-input');
const output = document.getElementById ('name-here');

button.addEventListener ('click', () => {
    output.textContent = input.value;
    input.value = ' '

})