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


function getBtnKey(lang) {
  removeKeyboar();
  let arr;
  if (lang == 'eng') {
    arr = keyArr.eng;
  } else if (lang == 'engUp') {
    arr = keyArr.engUp;
  } else if (lang == 'rus') {
    arr = keyArr.rus;
  } else if (lang == 'rusUp') {
    arr = keyArr.rusUp;
  }
  for (let i = 0; i < arr.length; i++) {
    let btn = document.createElement('div');
    if (i == 13 || i == 41 || i == 42 || i == 54) {
      btn.className = 'key keySize2';
    } else if (i == 29) {
      btn.className = 'key keySize2';
      btn.id = 'caps';
    } else if (i == 55 || i == 63) {
      btn.className = 'key keySizeCtrl';
    } else if (i == 58) {
      btn.className = 'key keySize6';
    } else {
      btn.className = 'key';
    }
    btn.innerHTML = arr[i];
    keyBox.appendChild(btn);
  }
}

getBtnKey(lang);

function removeKeyboar() {
  document.querySelector('.keyBox').innerHTML = '';
}

document.addEventListener('keydown', presKey);

function presKey(event) {
  const caps = document.getElementById('caps');
  const text = document.querySelector('.text');

  activeCaps(event, status)

  if (event.keyCode == 9) {
    text.value += '    ';
    event.preventDefault();
    return // Tab
  } else if (event.target.classList == 'text') {
    return
  } else if (event.keyCode > 111 & event.keyCode < 124) {
    return // F1-F12
  } else if (event.keyCode == 20) {
    return // Caps Lock
  } else if (event.keyCode == 8) {
    text.value = text.value.substr(0, (text.value.length - 1));
    return // Backspace
  } else if (event.keyCode == 13) {
    text.value += '\n';
    return // Enter
  } else if (event.keyCode == 18) {
    event.preventDefault();
    changeLang(lang);
    return
  } else if (event.location > 0) {
    event.preventDefault();
    return // Ctrl Shift Win
  } else if (event.keyCode == 93) {
    return // Option
  } else if (event.keyCode > 36 & event.keyCode < 41) {
    text.value += (arrow[event.keyCode - 37]);
  } else {
    text.value += event.key;
    return
  }
}

function strUp(state, lang) {
  let str = lang + state;
  getBtnKey(str);
}

let status = 0;

function activeCaps(event, stat) {
  if (status > 0) {
    if ((event.getModifierState && event.getModifierState('CapsLock')) == false) {
      status = 0;
      strUp('', lang);
    }
    if ((event.getModifierState && event.getModifierState('Shift')) == true) {
      strUp('', lang);
    }
  } else {
    if ((event.getModifierState && event.getModifierState('CapsLock')) == true) {
      status = 1;
      strUp('Up', lang);
      caps.classList.add('keyActive');
    }
    if ((event.getModifierState && event.getModifierState('Shift')) == true) {
      strUp('Up', lang);
    }
  }
}
document.addEventListener('keyup', e => {
  if (e.keyCode == 16) {
    strUp('', lang);
  }
});

function changeLang(str) {
  if (str == 'eng') {
    lang = 'rus';
    getBtnKey(lang);
  } else {
    lang = 'eng';
    getBtnKey(lang);
  }
}

document.addEventListener('click', mouseClick);

function mouseClick(event) {
  let str = event.target.innerText;
  if (str.length > 0 && str.length < 2) {
    document.querySelector('.text').value += str;
  } else if (str.length > 1 && str.length < 10) {
    console.log('mod btn');
  }
}
