var a = 5;  
var b, c;

b = (a * 5);  
b = (c = (b/2)); 

1
var age = prompt("Скільки вам років?");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - parseInt(age);
alert("Ваш рік народження: " + birthYear);

2

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
var celsiusInput = prompt("Введіть температуру в градусах Цельсія:");
var celsius = parseFloat(celsiusInput);
var fahrenheit = celsiusToFahrenheit(celsius);
alert(celsius + " градусів Цельсія дорівнює " + fahrenheit.toFixed(2) + " градусів Фаренгейта.");
var fahrenheitInput = prompt("Введіть температуру в градусах Фаренгейта:");

3

var dividend = parseInt(prompt("Введіть ділене:"));
var divisor = parseInt(prompt("Введіть дільник:"));
var quotient = Math.floor(dividend / divisor);
alert("Результат ділення націло: " + quotient);


4


const rate = 37.8; 
var amount = parseFloat(prompt("Введіть суму в валюті:"));
var exchangedAmount = amount / rate;
exchangedAmount = Math.round(exchangedAmount * 100) / 100;
alert("Результат обміну: " + exchangedAmount.toFixed(2));

5


var red = parseInt(prompt("Введіть значення для red (від 0 до 255):"));
var green = parseInt(prompt("Введіть значення для green (від 0 до 255):"));
var blue = parseInt(prompt("Введіть значення для blue (від 0 до 255):"));
var color = "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
alert("Отриманий CSS-колір: " + color);
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}


6


var totalFloors = parseInt(prompt("Введіть кількість поверхів у будинку:"));
var flatsPerFloor = parseInt(prompt("Введіть кількість квартир на поверсі:"));
var flatNumber = parseInt(prompt("Введіть номер квартири:"));
var totalEntrances = Math.ceil(flatNumber / (totalFloors * flatsPerFloor));
var entrance = Math.ceil(flatNumber / flatsPerFloor);
var floor = Math.ceil((flatNumber - (entrance - 1) * totalFloors * flatsPerFloor) / flatsPerFloor);
alert("Квартира номер " + flatNumber + " знаходиться в " + entrance + "-му під'їзді на " + floor + "-му поверсі.");
