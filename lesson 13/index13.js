//    <------- Ex 1 ------->
//    <------- Ex 1 ------->
//    <------- Ex 1 ------->

function showNotification({top = 0, right = 0, html, className}) {

  let notification = document.createElement('div');
  notification.className = "notification";
  if (className) {
    notification.classList.add(className);
  }

  notification.style.top = top + 'px';
  notification.style.right = right + 'px';

  notification.innerHTML = html;
  document.body.append(notification);

  setTimeout(() => notification.remove(), 1500);
}

// let i = 1;
// setInterval(() => {
//   showNotification({
//     top: 10,
//     right: 10,
//     html: 'Hello ' + i++,
//     className: "welcome"
//   });
// }, 3000);

//    <------- Ex 2 ------->
//    <------- Ex 2 ------->
//    <------- Ex 2 ------->

let fieldCoords = field.getBoundingClientRect();

let answer = [
  [
    fieldCoords.left,
    fieldCoords.top
  ],
  [ 
    fieldCoords.right,
    fieldCoords.bottom
  ],
  [
    fieldCoords.left + field.clientLeft,
    fieldCoords.top + field.clientTop
  ],
  [
    fieldCoords.left + field.clientLeft + field.clientWidth,
    fieldCoords.top + field.clientTop + field.clientHeight
  ]
];

console.log(answer.join(' '));

//    <------- Ex 3 ------->
//    <------- Ex 3 ------->
//    <------- Ex 3 ------->

function positionAt(anchor, position, elem) {
let anchorCoords = anchor.getBoundingClientRect();

switch (position) {
    case "top":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
      break;

    case "right":
      elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "bottom":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
      break;
  }
}

function showNote(anchor, position, html) {

  let note = document.createElement('div');
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}


let blockquote = document.querySelector('blockquote');

// showNote(blockquote, "top", "note above");
// showNote(blockquote, "right", "note at the right");
// showNote(blockquote, "bottom", "note below");

//    <------- Ex 4 ------->
//    <------- Ex 4 ------->
//    <------- Ex 4 ------->

hider.addEventListener('click', () => {
  document.getElementById('text').hidden = true;
})

//    <------- Ex 5 ------->
//    <------- Ex 5 ------->
//    <------- Ex 5 ------->

field2.addEventListener('click', function (e) {
let fieldCoords = this.getBoundingClientRect();

let ballCoords = {
    top: e.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
    left: e.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
};

if (ballCoords.top < 0) ballCoords.top = 0;
if (ballCoords.left < 0) ballCoords.left = 0;

if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
}

if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
}

  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';
})

//    <------- Ex 6 ------->
//    <------- Ex 6 ------->
//    <------- Ex 6 ------->

let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.title');

titleElem.addEventListener('click', () => {
  menuElem.classList.toggle('open');
})

//    <------- Ex 7 ------->
//    <------- Ex 7 ------->
//    <------- Ex 7 ------->

let panes = document.querySelectorAll('.pane');

    for(let pane of panes) {
      pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
      // кнопка становится первым потомком плитки (pane)
      pane.firstChild.onclick = () => pane.remove();
    }

//    <------- Ex 8 ------->
//    <------- Ex 8 ------->
//    <------- Ex 8 ------->

function showCover() {
  let coverDivElement = document.createElement('div');
  coverDivElement.id = 'cover-div';
  document.body.style.overflowY = 'hidden';
  document.body.append(coverDivElement);
}

function hideCover() {
  document.getElementById('cover-div').remove();
  document.body.style.overflowY = '';
}

function showPrompt(text, callback) {
  showCover();
  let form = document.getElementById('prompt-form');
  let container = document.getElementById('prompt-container');
  document.getElementById('prompt-message').innerHTML = text;
  form.text.value = '';

  function complete(value) {
    hideCover();
    container.style.display = 'none';
    document.onkeydown = null;
    callback(value);
  }

  form.onsubmit = function() {
    let value = form.text.value;
    if (value == '') return false; 

    complete(value);
    return false;
  };

  form.cancel.addEventListener('click', () => {
    complete(null);
  })

  document.addEventListener('keydown', (event) => {
    if (event.key == 'Escape') {
      complete(null);
    }
  })

  let lastElem = form.elements[form.elements.length - 1];
  let firstElem = form.elements[0];

  lastElem.addEventListener('keydown', (event) => {
    if (event.key == 'Tab' && !event.shiftKey) {
      firstElem.focus();
      return false;
    }
  })

  firstElem.addEventListener('keydown', (event) => {
    if (event.key == 'Tab' && event.shiftKey) {
      lastElem.focus();
      return false;
    }
  })

  container.style.display = 'block';
  form.elements.text.focus();
}

document.getElementById('show-button').addEventListener('click', function () {
  showPrompt("Введите что-нибудь..", function(value) {
    alert("Вы ввели: " + value);
  });
})