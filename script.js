console.log('Мой diskord - gromotron5525#6640');
console.log('Мой telegram - https://t.me/gromotron');

const keyArr = {
  'eng': [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'
  ],
  'engUp': [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
    'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'
  ],
  'rus': [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'
  ],
  'rusUp': [
    'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
    'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
    'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'
  ]
};
const arrow = ['←', '↑', '→', '↓'];
let lang = 'eng';


let box = document.createElement('div');
box.className = 'box';
document.body.insertAdjacentElement('afterbegin', box);
let text = document.createElement('textarea');
text.className = 'text';
box.appendChild(text);
let keyBox = document.createElement('div');
keyBox.className = 'keyBox';
box.appendChild(keyBox);

let someText = document.createElement('p');
box.appendChild(someText);
someText.innerHTML = 'Developed for Windows <br> Press "Alt" to change language';
