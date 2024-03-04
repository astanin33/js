function Temperature(temp, fromUnit, toUnit) {
    if (typeof temp !== 'number' || isNaN(temp)) {
        return 'Введіть коректне числове значення температури';
    }
    if (!fromUnit || !toUnit) {
        return 'Вкажіть одиниці вимірювання температури';
    }
    switch (fromUnit.toLowerCase()) {
        case 'c':
            if (toUnit.toLowerCase() === 'f') {
                return (temp * 9/5) + 32;
            } else if (toUnit.toLowerCase() === 'k') {
                return temp + 273.15;
            } else {
                return 'Не відомі одиниці вимірювання';
            }
        case 'f':
            if (toUnit.toLowerCase() === 'c') {
                return (temp - 32) * 5/9;
            } else if (toUnit.toLowerCase() === 'k') {
                return (temp - 32) * 5/9 + 273.15;
            } else {
                return 'Не відомі одиниці вимірювання';
            }
        case 'k':
            if (toUnit.toLowerCase() === 'c') {
                return temp - 273.15;
            } else if (toUnit.toLowerCase() === 'f') {
                return (temp - 273.15) * 9/5 + 32;
            } else {
                return 'Не відомі одиниці вимірювання';
            }
        default:
            return 'Не відомі одиниці вимірювання';
    }
}






function NumberToRGB(r, g, b) {
    if (typeof r !== 'number' || typeof g !== 'number' || typeof b !== 'number' ||
        isNaN(r) || isNaN(g) || isNaN(b) ||
        r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        return 'Некоректні значення кольору';
    }
    const red = r.toString(16).padStart(2, '0');
    const green = g.toString(16).padStart(2, '0');
    const blue = b.toString(16).padStart(2, '0');
    return `#${red}${green}${blue}`;
}


function StringNewLine(str) {
    return str.replace(/\\n/g, '\n');
}
const inputString = 'Це рядок з \\n переносами';
console.log(StringNewLine(inputString)); 





function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
function StringCredentials() {
    const name = prompt('Введіть ваше ім\'я:');
    const surname = prompt('Введіть ваше прізвище:');
    const fatherName = prompt('Введіть ваше по батькові:');
    const fullName = `${capitalize(name)} ${capitalize(surname)} ${capitalize(fatherName)}`;
    return {
        name,
        surname,
        fatherName,
        fullName
    };
}



function LoginAndPassword(correctLogin, correctPassword) {
    const enteredLogin = prompt('Введіть ваш логін:');

    const enteredPassword = prompt('Введіть ваш пароль:');
    if (enteredLogin === correctLogin && enteredPassword === correctPassword) {
        return true;
    } else {
        return false;
    }
}




function filterLexics(text, blacklist) {
    const words = text.split(/\s+/);
    const filteredWords = words.filter(word => !blacklist.includes(word.toLowerCase()));
    return filteredWords.join(" ");
}
const text = "Це тестовий рядок із декількома некоректними словами, такими як бляха, муха, пляшка, шабля.";
const blacklist = ['бляха', 'муха', 'пляшка', 'шабля'];

const filteredText = filterLexics(text, blacklist);
console.log(filteredText);





function CurrencyTable() {
    const data = [
        ['USD', 37.50],
        ['EUR', 40.10],
        ['GBP', 37.20],
        ['JPY', 0.25],
        ['AUD', 20.00]
    ];

    function ForTable(array) {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i][0] + ': ' + array[i][1]);
        }
    }

    ForTable(data);
}


function sort(array, key, ascending = true) {
    array.sort((a, b) => {
        if (a[key] < b[key]) return ascending ? -1 : 1;
        if (a[key] > b[key]) return ascending ? 1 : -1;
        return 0;
    });
}

var persons = [
    {name: "Іван", age: 17},
    {name: "Марія", age: 35},
    {name: "Олексій", age: 73},
    {name: "Яків", age: 12}
];
sort(persons, "age");
console.log("Сортування за віком за зростанням:", persons);
sort(persons, "name", false);
console.log("Сортування на ім'я за спаданням:", persons);




function calculate() {
    const firstNumber = parseFloat(prompt("Введіть перше число:"));
    const secondNumber = parseFloat(prompt("Введіть друге число:"));

  
    const sum = firstNumber + secondNumber;
    const difference = firstNumber - secondNumber;
    const product = firstNumber * secondNumber;
    let division;
    if (secondNumber !== 0) {
        division = firstNumber / secondNumber;
    } else {
        division = "Ділення на нуль неможливе";
    }
    const results = {
        sum: sum,
        difference: difference,
        product: product,
        division: division
    };

    return results