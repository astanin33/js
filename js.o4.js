
let user_input = prompt("Будь ласка, введіть число:");


let number = parseFloat(user_input);
if (!isNaN(number)) {
    if (number % 2 === 0) {
        console.log("Введене число є парним.");
    } else {
        console.log("Введене число є непарним.");
    }
} else {
    console.log("Помилка: Введене значення не є числом.");
}


let user_text = prompt("Будь ласка, введіть текст:");
let bad_words = ["некоректне1", "некоректне2", "некоректне3"]; // Додайте ваші некоректні слова
let found_bad_words = [];
bad_words.forEach(function(word) {
    if (user_text.includes(word)) {
        found_bad_words.push(word);
    }
});
if (found_bad_words.length > 0) {
    console.log("Знайдені некоректні слова:", found_bad_words.join(", "));
} else {
    console.log("Текст не містить некоректних слів.");
}



let answer1 = confirm("Чи хочете ви ввімкнути цю функцію?");
let answer2 = confirm("Чи бажаєте ви виконати цю дію?");
console.log("Відповідь на перше питання:", answer1);
console.log("Відповідь на друге питання:", answer2);



let answer1 = confirm("Чи хочете ви ввімкнути цю функцію?");


let answer2 = confirm("Чи бажаєте ви виконати цю дію?");


if (answer1) {
    alert("Ви ввімкнули цю функцію");
} else {
    alert("Ви не ввімкнули цю функцію");
}

if (answer2) {
    alert("Ви обрали виконати цю дію");
} else {
    alert("Ви відмовилися від виконання цієї дії");
}



let isMale = confirm("Ви чоловік?");
let genderMessage = isMale ? "Ви чоловік" : "Ви жінка";
alert(genderMessage);



let age = prompt("Введіть ваш вік:");

if (age === null || age === "") {
  alert("Помилка! Ви не ввели вік.");
} else {
  alert("Ваш вік: " + age);
}

let answer = confirm("Ти хочеш піти на шопінг?");

if (!answer) {
  alert("Ти - бяка!");
}


let answer = confirm("Ти хочеш піти на шопінг?");

if (answer === false) {
  alert("Ти - бяка!");
}



let firstName = prompt("Введіть ваше ім'я:") || "Іван";
let lastName = prompt("Введіть ваше прізвище:") || "Іванов";
let middleName = prompt("Введіть ваше по батькові:") || "Іванович";

alert("ПІБ: " + firstName + " " + lastName + " " + middleName);



let firstName = prompt("Введіть ваше ім'я:");
if (firstName === "" || firstName === null) {
  firstName = "Іван";
}

let lastName = prompt("Введіть ваше прізвище:");
if (lastName === "" || lastName === null) {
  lastName = "Іванов";
}

let middleName = prompt("Введіть ваше по батькові:");
if (middleName === "" || middleName === null) {
  middleName = "Іванович";
}

alert("ПІБ: " + firstName + " " + lastName + " " + middleName);



// Функція для генерації випадкового варіанту комп'ютера
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return "камінь";
        case 1:
            return "ножиці";
        case 2:
            return "папір";
    }
}

// Функція для визначення переможця
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "нічия";
    } else if ((userChoice === "камінь" && computerChoice === "ножиці") || 
               (userChoice === "ножиці" && computerChoice === "папір") ||
               (userChoice === "папір" && computerChoice === "камінь")) {
        return "Ви перемогли!";
    } else {
        return "Комп'ютер переміг!";
    }
}


let userChoice = prompt("Виберіть: камінь, ножиці або папір?");
if (userChoice) {
    userChoice = userChoice.toLowerCase(); 
    let computerChoice = getComputerChoice();
    alert("Варіант комп'ютера: " + computerChoice);
    alert(determineWinner(userChoice, computerChoice));
} else {
    alert("Скасовано гру.");
}

