var age = +prompt("Скільки вам років?", "");
if (age < 0) 
    alert("Ви ще не народилися, щоб вважатися людиною!");
else if (age < 18) 
    alert("школяр");
else if (age < 30)
    alert("молодь");
else if (age < 45) 
    alert("зрілість");
else if (age < 60) 
    alert("захід сонця");
else 
    alert("як пенсія?");







    var size = prompt("Введіть розмір одягу (XS, S, M, L, XL):");

switch (size) {
  case "XS":
    alert("Вибрали розмір XS.");
    break;
  case "S":
    alert("Вибрали розмір S.");
    break;
  case "M":
    alert("Вибрали розмір M.");
    break;
  case "L":
    alert("Вибрали розмір L.");
    break;
  case "XL":
    alert("Вибрали розмір XL.");
    break;
  default:
    alert("Такого розміру немає у нашому асортименті.");
    break;
}







let color = prompt("Введіть колір","");

if (color === "red") {
    document.write("<div style='background-color: red;'>червоний</div>");
} else if (color === "black") {
    document.write("<div style='background-color: black; color: white;'>чорний</div>");
} else if (color === "blue") {
    document.write("<div style='background-color: blue;'>синій</div>");
} else if (color === "green") {
    document.write("<div style='background-color: green;'>зелений</div>");
} else {
    document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
}







const noSwitch = (key, cases, defaultKey = 'default') => {
    // Перевірка наявності key в cases
    if (key in cases) {
        // Дістаємо значення по ключу, яке повинно бути функцією, і запускаємо її
        return cases[key]();
    } else {
        // Якщо ключ не знайдений, виконуємо функцію, яка відповідає ключу defaultKey
        if (defaultKey in cases) {
            return cases[defaultKey]();
        } else {
            // Якщо ніяка функція не знайдена, видаємо помилку
            throw new Error('Default function not found');
        }
    }
}

const drink = prompt("Що ви любите пити");

noSwitch(drink, {
    воду: () => console.log('Найздоровіший вибір!'),
    чай: () => console.log('Смачна та корисна штука. Не перестарайтеся з цукром'),
    пиво: () => console.log('Добре влітку, та в міру'),
    віскі: () => console.log('Та ви, батечку, естет! Не забудьте лід і сигару'),
    default: () => console.log('Щось я не зрозумів')
});







fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
        for (let currency in data.rates) {
            let button = document.createElement('button');
            button.innerText = currency;
            button.onclick = () => {
                let amount = prompt(`Введіть суму в ${currency}:`);
                if (amount) {
                    let convertedAmount = parseFloat(amount) / data.rates[currency];
                    alert(`Сума в USD: ${convertedAmount.toFixed(2)}`);
                }
            };
            document.body.appendChild(button);
        }
    });
