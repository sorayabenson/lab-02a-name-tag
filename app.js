console.log ('Hello world!');

const button = document.getElementById ('name-button');
const input = document.getElementById ('name-input');
const output = document.getElementById ('name-here');

button.addEventListener ('click', () => {
    output.textContent = input.value;
    input.value = ' '

})

const pinkSwitch = document.getElementById ('pink');
const orangeSwitch = document.getElementById ('orange');
const purpleSwitch = document.getElementById ('purple');
const blueSwitch = document.getElementById ('blue');
const nameTag = document.getElementById ('name-tag');

pinkSwitch.addEventListener ('click', () => {
    nameTag.style.background = "#FF0080";

})

orangeSwitch.addEventListener ('click', () => {
    nameTag.style.background = "#FF6600";

})

purpleSwitch.addEventListener ('click', () => {
    nameTag.style.background = "#8000FF";

})
blueSwitch.addEventListener ('click', () => {
    nameTag.style.background = "#0028FF";

})
