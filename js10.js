let result = false;

while (!result) {
  result = confirm("Натисніть ОК, щоб продовжити, або скасуйте, щоб завершити.");
}

alert("Ви натиснули ОК. Цикл завершено.");




let arr = [];

while (true) {
  let userInput = prompt("Введіть значення (натисніть Скасувати, щоб завершити):");

  
  if (userInput === null) {
    break;
  }

 
  arr.push(userInput);
}

console.log("Масив користувача:", arr);





let arr = [];
let index = 0;

while (true) {
  let userInput = prompt("Введіть значення (натисніть Скасувати, щоб завершити):");
  if (userInput === null) {
    break;
  }
  arr[index] = userInput;
  index++;
}

console.log("Масив користувача:", arr);




let iterations = 0;

while (true) {
  iterations++;

  if (Math.random() > 0.9) {
    break;
  }
}

alert("Кількість ітерацій: " + iterations);






while (true) {
    let userInput = prompt("Натисніть ОК, щоб продовжити, або скасуйте, щоб перервати.");
    if (userInput === null) {
    } else {
      break;
    }
  }
  



  let N = prompt("Введіть число N:");
let sum = 0;
for (let i = 1; i <= N; i += 3) {
  sum += i;
}
console.log("Сума арифметичної прогресії від 1 до", N, "з кроком 3:", sum);







let length = 6; 
let result = '';

for (let i = 0; i < length; i++) {
  if (i % 2 === 0) {
    result += '#';
  } else {
    result += '.';
  }
  if (i !== length - 1) {
    result += ' ';
  }
}

console.log(result);




let result = "";
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        result += j;
    }
    result += "\n";
}
console.log(result);







const rows = 10;
const cols = 13;
let result = "";

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if ((i + j) % 2 === 0) {
            result += ".";
        } else {
            result += "#";
        }
    }
    result += "\n";
}

console.log(result);




const n = parseInt(prompt("Введіть кількість елементів у масиві:"));

const cubes = [];
for (let i = 0; i < n; i++) {
    cubes.push(Math.pow(i, 3));
}

console.log(cubes);




const size = 10; 
const multiplicationTable = [];
for (let i = 0; i < size; i++) {
    multiplicationTable[i] = [];
}
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        multiplicationTable[i][j] = (i + 1) * (j + 1);
    }
}
for (let i = 0; i < size; i++) {
    console.log(multiplicationTable[i].join("\t"));
}












function drawDiamond(size) {
    const midpoint = Math.floor(size / 2);

    for (let i = 0; i < size; i++) {
        let row = "";
        const spaces = Math.abs(midpoint - i);
        const hashes = size - 2 * spaces;
        for (let j = 0; j < spaces; j++) {
            row += ".";
        }
        for (let k = 0; k < hashes; k++) {
            row += "#";
        }

        console.log(row);
    }
}

const size = 11; 
drawDiamond(size);
