function displayJSONasTable(DOMElement, jsonData) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    for (const key in jsonData) {
      const th = document.createElement('th');
      th.textContent = key;
      headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);
    const tbody = document.createElement('tbody');
    const dataRow = document.createElement('tr');
    for (const key in jsonData) {
      const td = document.createElement('td');
      td.textContent = jsonData[key];
      dataRow.appendChild(td);
    }
    tbody.appendChild(dataRow);
    table.appendChild(tbody);
    DOMElement.innerHTML = '';
    DOMElement.appendChild(table);
  }
  

  const DOMElement = document.getElementById('tableContainer'); 
  fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(luke => displayJSONasTable(DOMElement, luke));
  










    function displayJSONasTable(DOMElement, jsonData) {
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        for (const key in jsonData) {
          const th = document.createElement('th');
          th.textContent = key;
          headerRow.appendChild(th);
        }
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        const tbody = document.createElement('tbody');
        const dataRow = document.createElement('tr');
        for (const key in jsonData) {
          const td = document.createElement('td');
          const value = jsonData[key];
          if (Array.isArray(value)) {
           
            const arrayButton = document.createElement('button');
            arrayButton.textContent = 'Show Array';
            arrayButton.addEventListener('click', () => {
              displayJSONasTable(td, value);
            });
            td.appendChild(arrayButton);
          } else if (typeof value === 'string' && value.startsWith('https://swapi.dev/api/')) {
           
            const apiButton = document.createElement('button');
            apiButton.textContent = 'Fetch'



            function fetchDataWithDelay(url, delay) {
               
                return new Promise(resolve => {
                  setTimeout(resolve, delay);
                }).then(() => {
                  
                  return fetch(url).then(response => response.json());
                });
              }
              
              function raceFetchWithDelay(url, delay) {
                return Promise.race([
                  fetchDataWithDelay(url, delay),
                  new Promise(resolve => setTimeout(resolve, delay + 100)) 
                ]);
              }
              
              const apiUrl = 'https://swapi.dev/api/people/1/';
              const delay = Math.floor(Math.random() * 1000) + 500; 
              
              raceFetchWithDelay(apiUrl, delay)
                .then(data => {
                  console.log('Швидше завершилася:', data); 
                })
                .catch(error => {
                  console.error('Помилка:', error); 
                });
              








                function confirmPromise(text) {
                    return new Promise((resolve, reject) => {
                      const confirmation = confirm(text); 
                    
                      
                      const clickHandler = (event) => {
                       
                        document.removeEventListener('click', clickHander);
                        
                        if (event.target === document.body) {
                         
                          reject(new Error('Canceled'));
                        } else {
                         
                          confirmation ? resolve() : reject(new Error('Canceled'));
                        }
                      };
                  
                     
                      document.addEventListener('click', clickHandler);
                    });
                }
                  confirmPromise('Проміси це складно?')
                    .then(() => console.log('Не так вже й складно'))
                    .catch(() => console.log('Respect за посидючість і уважність'));
                  







                    function promptPromise(text) {
                        return new Promise((resolve, reject) => {
                          const userInput = prompt(text); 
                        
                          const clickHandler = (event) => {
                           
                            document.removeEventListener('click', clickHandler);
                           дно
                            if (event.target === document.body) {
                             
                              reject(new Error('Canceled'));
                            } else {
                             
                              userInput ? resolve(userInput) : reject(new Error('Canceled'));
                            }
                          };
                       document.addEventListener('click', clickHandler);
                        });
                      }
                      promptPromise("Як тебе звуть?")
                        .then(name => console.log(`Тебе звуть ${name}`))
                        .catch(() => console.log('Ну навіщо морозитися, нормально ж спілкувалися'));
                      





                        function loginPromise(parent) {
                            return new Promise((resolve, reject) => {
                              const form = new LoginForm(parent, (login, password) => {
                                resolve({ login, password });
                              });
                            });
                          }
                          
                          loginPromise(document.body).then(({ login, password }) => {
                            console.log(`Ви ввели ${login} та ${password}`);
                          });
                          