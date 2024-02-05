let dailyCoffeeConsumption = parseFloat(prompt('Сколько чашек кофе вы пьете в день?')); // количество чашек кофе в день
let coffeePricePerCup = parseFloat(prompt('Сколько стоит одна чашка кофе?')); // стоимость одной чашки кофе
let daysInMonth = 30; 
let monthlyCoffeeExpense = dailyCoffeeConsumption * coffeePricePerCup * daysInMonth; // общие расходы на кофе за месяц
alert(`Ваши ежемесячные расходы на кофе составляют: ${monthlyCoffeeExpense.toFixed(2)} грн`);