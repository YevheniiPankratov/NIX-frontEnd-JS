//    <------- Ex 1 ------->
//    <------- Ex 1 ------->
//    <------- Ex 1 ------->

// document.body.firstElementChild

// document.body.children[1]

// document.body.lastElementChild.lastElementChild

//    <------- Ex 2 ------->
//    <------- Ex 2 ------->
//    <------- Ex 2 ------->

let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}

//    <------- Ex 3 ------->
//    <------- Ex 3 ------->
//    <------- Ex 3 ------->

let ageTable = document.getElementById('age-table');

let labels = document.querySelectorAll('#age-table label');

let firstTd = table.querySelector('td');

let form = document.querySelector('form[name="search"]');

let firstInput = form.getElementsByTagName('input')[0];

let inputs = form.querySelectorAll('input');
let lastInput = inputs[inputs.length-1];

//    <------- Ex 4 ------->
//    <------- Ex 4 ------->
//    <------- Ex 4 ------->

// for (let li of document.querySelectorAll('li')) {
//   let text = li.firstChild.data;
//   console.log(text);
// }

// let countLi = document.querySelectorAll('li').length

//    <------- Ex 5 ------->
//    <------- Ex 5 ------->
//    <------- Ex 5 ------->

function clear(elem) {
  while (elem.firstChild) {
    elem.firstChild.remove();
  }
}

clear(elem);

//    <------- Ex 6 ------->
//    <------- Ex 6 ------->
//    <------- Ex 6 ------->

  let text;
  let ul = document.createElement("ul");
  document.body.appendChild(ul);
  do {
      text = prompt("please enter text", "");
      if (text !== "" && text != null) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(text));
        ul.appendChild(li);
      }

  } while(text !== "" && text != null);

//    <------- Ex 7 ------->
//    <------- Ex 7 ------->
//    <------- Ex 7 ------->

  let list = document.getElementsByTagName('li');

  for (let li of list) {
      let count = li.getElementsByTagName('li').length;
      if (!count) continue;
      li.firstChild.data += ' [' + count + ']';
    }

//    <------- Ex 8 ------->
//    <------- Ex 8 ------->
//    <------- Ex 8 ------->



//    <------- Ex 9 ------->
//    <------- Ex 9 ------->
//    <------- Ex 9 ------->

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');