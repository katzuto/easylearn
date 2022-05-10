
let value = prompt("Enter your number", '');

if (value > 0) {
    alert(1)
} else if (value == 0) {
    alert(0)
} else if (value < 0) {
    alert(-1)
}

let login;

if (login = "Сотрудник") {
    alert('Hello')
} else if (login = 'Директор') {
    alert("Hello1")
} else if (login == '') {
    alert('Login not found')
}

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}


// цикл while

while (condition /* условие */) {
    // тело цикла
}

let i = 0;

while (i < 3) {
    alert(i);
    i++;
}

let i = 3;

while(i) alert(i--);

// цикл do..while


do {
    // body
} while (condition);


let i = 0;

do {
    alert(i);
    i++
} while (i < 3);


// цикл for

for (/* начало; условие; шаг */) {
    // body
}



for (let i = 0; i < 3; i++) {
    alert(i);
}

alert(i);



let i = 0;

for (; i < 3; i++) {
    alert(i); // 0 1 2
} 

let i = 0;

for (; i < 3 ;) {
    alert(i++);
}

for (;;) {

}

// break

let sum = 0;

while (true) {
    let value = +prompt('Enter your number', '');
    if (!value) break;

    sum += value;
}

alert('Sum' + sum);



for (let i = 0; i < 10; i++) {
    if(i % 2 == 0) continue

    alert(i)
}


// while - Проверяет условие перед каждой итерацией
// do..while - Проверяет условие после каждой итерации
// for (;;) - Проверяет условие перед каджой итерацией, есть возможность задать дополнительные настройки


// task 1

let i = 3;

while (i) {
    alert(i--);
}


// task 2

// При помощи for (;;) вывести четные числа от 2 до 10

for (let i = 0; i < 10; i++) {
    if(i % 2 != 0) continue

    alert(i)
}

// task 3

function showMessage() {
    alert("Всем привет")
}

showMessage()

function Name(parameters) {
    body
}



function showMessage() {
    let message = 'Hello' // local variable

    alert(message)
}

showMessage() // Hello

alert(message) // fail


// -----------------------------


let userName = 'Akmal'; // external variable


function showMessage() {
    let message = "Hello" + userName;
    alert(message);
}

alert() 





























