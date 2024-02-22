const smartphone = {
    brand: "Apple",
    model: "iPhone 15",
    year: 2023,
    color: "Blue",
    storage: "256GB"
};


const smartphone = {
    brand: "Apple",
    model: "iPhone 15",
    year: 2023,
    color: "Blue",
    storage: "256GB"
};
smartphone[prompt("Введіть назву першої нової властивості:")] = prompt("Введіть значення першої нової властивості:");
smartphone[prompt("Введіть назву другої нової властивості:")] = prompt("Введіть значення другої нової властивості:");
console.log(smartphone);




const newSmartphone = Object.assign({}, smartphone);
const newPropertyKey = prompt("Введіть назву нової властивості:");
const newPropertyValue = prompt("Введіть значення для нової властивості:");
newSmartphone[newPropertyKey] = newPropertyValue;

console.log(newSmartphone);



{
    "tagName": "body",
    "attrs": {},
    "children": [
      {
        "tagName": "div",
        "attrs": {},
        "children": [
          {
            "tagName": "span",
            "attrs": {},
            "children": ["Enter a data please:"]
          },
          {
            "tagName": "br",
            "attrs": {},
            "children": []
          },
          {
            "tagName": "input",
            "attrs": {
              "type": "text",
              "id": "name"
            },
            "children": []
          },
          {
            "tagName": "input",
            "attrs": {
              "type": "text",
              "id": "surname"
            },
            "children": []
          }
        ]
      },
      {
        "tagName": "div",
        "attrs": {},
        "children": [
          {
            "tagName": "button",
            "attrs": {
              "id": "ok"
            },
            "children": ["OK"]
          },
          {
            "tagName": "button",
            "attrs": {
              "id": "cancel"
            },
            "children": ["Cancel"]
          }
        ]
      }
    ]
  }

  



  {
    "tagName": "body",
    "attrs": {},
    "children": [
      {
        "tagName": "div",
        "attrs": {},
        "parent": null,
        "children": [
          {
            "tagName": "span",
            "attrs": {},
            "parent": 0,
            "children": ["Enter a data please:"]
          },
          {
            "tagName": "br",
            "attrs": {},
            "parent": 0,
            "children": []
          },
          {
            "tagName": "input",
            "attrs": {
              "type": "text",
              "id": "name"
            },
            "parent": 0,
            "children": []
          },
          {
            "tagName": "input",
            "attrs": {
              "type": "text",
              "id": "surname"
            },
            "parent": 0,
            "children": []
          }
        ]
      },
      {
        "tagName": "div",
        "attrs": {},
        "parent": null,
        "children": [
          {
            "tagName": "button",
            "attrs": {
              "id": "ok"
            },
            "parent": 1,
            "children": ["OK"]
          },
          {
            "tagName": "button",
            "attrs": {
              "id": "cancel"
            },
            "parent": 1,
            "children": ["Cancel"]
          }
        ]
      }
    ]
  }

  




  let arr = [1, 2, 3, 4, 5, "a", "b", "c"];

let [odd1, even1, odd2, even2, odd3, ...letters] = arr.filter(item => typeof item === 'number' ? item : NaN);

console.log("Parni:", even1, even2);
console.log("Neparni:", odd1, odd2, odd3);
console.log("Litery:", letters);





let arr = [1, "abc"];

let [number, [s1, s2, s3]] = arr;

console.log("number:", number);
console.log("s1:", s1);
console.log("s2:", s2);
console.log("s3:", s3);



let obj = {
    name: 'Ivan',
    surname: 'Petrov',
    children: [{name: 'Maria'}, {name: 'Nikolay'}]
};

let { children: [{ name: name1 }, { name: name2 }] } = obj;

console.log("name1:", name1);
console.log("name2:", name2);



let arr = [1, 2, 3, 4, 5, 6, 7, 10];

let [a, b, ...rest] = arr;
let length = arr.length;

console.log("a:", a);
console.log("b:", b);
console.log("length:", length);




function getExchangeRate(baseCurrency) {
    return fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`)
        .then(res => res.json())
        .then(data => data.rates);
}


function convertCurrency(fromCurrency, toCurrency, amount) {
    getExchangeRate(fromCurrency.toUpperCase())
        .then(rates => {
            const exchangeRate = rates[toCurrency.toUpperCase()];
            if (exchangeRate) {
                const convertedAmount = amount * exchangeRate;
                console.log(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
            } else {
                console.log(`Курс обміну для введених валют не знайдено.`);
            }
        })
        .catch(error => console.error(`Сталася помилка: ${error}`));
}


convertCurrency('USD', 'EUR', 100);




function getExchangeRate(baseCurrency) {
    return fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`)
        .then(res => res.json())
        .then(data => data.rates);
}


function createCurrencyTable(currencies) {
    const table = [];
    currencies.forEach(baseCurrency => {
        const row = {};
        row[baseCurrency] = 1;
        table.push(row);
    });




    
    
    const persons = [
      {
          name: 'Марія',
          fatherName: 'Іванівна',
          surname: 'Іванова',
          sex: 'female'
      },
      {
          name: 'Миколай',
          fatherName: 'Іванович',
          surname: 'Іванов',
          age: 15
      },
      {
          name: 'Петро',
          fatherName: 'Іванович',
          surname: 'Іванов',
          married: true
      },
  ];
  
  let tableHTML = '<table border="1"><tr><th>Імя</th><th>По батькові</th><th>Прізвище</th><th>Стать</th><th>Вік</th><th>Одружений</th></tr>';
  
  persons.forEach(person => {
      tableHTML += '<tr>';
      tableHTML += `<td>${person.name}</td>`;
      tableHTML += `<td>${person.fatherName}</td>`;
      tableHTML += `<td>${person.surname}</td>`;
      tableHTML += `<td>${person.sex || '-'}</td>`;
      tableHTML += `<td>${person.age || '-'}</td>`;
      tableHTML += `<td>${person.married || '-'}</td>`;
      tableHTML += '</tr>';
  });
  
  tableHTML += '</table>';
  
  console.log(tableHTML);
  
