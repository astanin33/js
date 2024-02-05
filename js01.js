
let firstParameter = 8;

let secondParameter = 15;

let somePartialResult = firstParameter * 3;

let someOtherPartialResult = secondParameter / 7500;

let result = somePartialResult + someOtherPartialResult;

console.log(`Результат: ${result}`);
24.002




// Запит на введення вартості товару від користувача
let productCost = prompt("1200:");

// Перетворення введеного рядка у число
productCost = parseFloat(productCost);

// Перевірка, чи введене значення є числом
if (isNaN(productCost)) {
    alert("1200.");
} else {
    // Обчислення податку (припустимо, що податок 20%)
    let taxRate = 0.2;
    let taxAmount = productCost * taxRate;

    // Обчислення загальної вартості з податком
    let totalCost = productCost + taxAmount;

    // Виведення результату за допомогою alert
    alert(`1200: ${productCost} грн\nПодаток (20%): ${taxAmount} грн\nЗагальна вартість з податком: ${totalCost} грн`);
}
asdsad  JSON            
sdad