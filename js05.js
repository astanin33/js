var answers = [
    confirm("Питання 1"),
    confirm("Питання 2"),
    confirm("Питання 3")
];



var answers = [];
answers[0] = prompt("Питання 1");
answers[1] = prompt("Питання 2");
answers[2] = prompt("Питання 3");



var array = [10, 20, 30, 40, 50];
var index = prompt("Будь ласка, введіть індекс у масиві:");

if (index === "length") {
    console.log("Довжина масиву: " + array.length);
} else {
    index = parseInt(index);
    if (index >= 0 && index < array.length) {
        console.log("Значення елемента за індексом " + index + ": " + array[index]);
    } else {
        console.log("Недійсний індекс");
    }
}


var array = [10, 20, 30, 40, 50];
var index = prompt("Будь ласка, введіть індекс у масиві:");
var value = prompt("Будь ласка, введіть значення для цього індексу:");

index = parseInt(index);

if (index >= 0 && index < array.length) {
    array[index] = value;
    console.log("Значення елемента за індексом " + index + " було оновлено.");
    console.log("Новий масив: " + array);
} else {
    console.log("Недійсний індекс");
}



const multiplicationTable = [
    [1, 2, 3, 4, 5],
    [2, 4, 6, 8, 10],
    [3, 6, 9, 12, 15],
    [4, 8, 12, 16, 20],
    [5, 10, 15, 20, 25]
];

console.log(multiplicationTable[2][3]); 


const multiplicationTable = [];

for (let i = 1; i <= 5; i++) {
    const row = [];
    for (let j = 1; j <= 5; j++) {
        const product = i * j;
        if (product !== 0) {
            row.push(product);
        }
    }
    multiplicationTable.push(row);
}

console.log(multiplicationTable);





const userInput = prompt("Будь ласка, введіть рядок із кількох слів:");


const targetWord = prompt("Будь ласка, введіть потрібне слово:");


const words = userInput.split(" ");


let position = -1;


for (let i = 0; i < words.length; i++) {
    if (words[i] === targetWord) {
        position = i + 1;
        break;
    }
}


if (position !== -1) {
    console.log(`Слово "${targetWord}" знаходиться на позиції ${position} у рядку.`);
} else {
    console.log(`Слово "${targetWord}" не знайдено у рядку.`);
}




const userInputArray = [];


for (let i = 0; i < 5; i++) {
    const userInput = prompt("Будь ласка, введіть елемент:");
    userInputArray.push(userInput);
}

const reversedArray = [];

while (userInputArray.length > 0) {
    reversedArray.push(userInputArray.pop());
}

console.log("Введені елементи у звичайному порядку:", userInputArray);
console.log("Елементи у зворотньому порядку:", reversedArray);




const reversedReversedArray = [];
while (reversedArray.length > 0) {
    reversedReversedArray.unshift(reversedArray.shift());
}
console.log("Елементи другого масиву у звичайному порядку:", reversedReversedArray);
console.log("Елементи першого масиву у звичайному порядку:", userInputArray);


const arr = [1, 2, 3];
const arr2 = arr;

console.log(arr === arr2); 



const userInput = prompt("Будь ласка, введіть рядок:");
const [firstLetter, , , , fifthLetter, , , , ninthLetter] = userInput;
console.log("Перша літера:", firstLetter);
console.log("П'ята літера:", fifthLetter);
console.log("Дев'ята літера:", ninthLetter);



const names = ["John", "Paul", "George", "Ringo"];

for (const name of names) {
    alert(name);
}



const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<select>";

for (const currency of currencies) {
    str += `<option>${currency}</option>`;
}

str += "</select>";

document.write(str);



const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<table>";

for (let i = 0; i < currencies.length; i += 3) {
    str += "<tr>"; 
    for (let j = i; j < i + 3 && j < currencies.length; j++) {
        str += "<td>"; /
        for (const letter of currencies[j]) {
            str += `<p>${letter}</p>`; 
        }
        str += "</td>"; 
    }
    str += "</tr>"; 
}

str += "</table>";

document.write(str);


function censorWords(inputString, forbiddenWords) {
    const words = inputString.split(" ");
    const censoredWords = words.map(word => {
        return forbiddenWords.includes(word) ? "BEEP" : word;
    });
 
    return censoredWords.join(" ");
}
const inputString = prompt("Введіть рядок:");
const forbiddenWords = ["bad", "rude", "offensive"];
const result = censorWords(inputString, forbiddenWords);
console.log(result);

