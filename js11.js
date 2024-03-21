function createPerson(name, surname) {
    return {
        name: name,
        surname: surname,
        getFullName: function() {
            if (this.fatherName) {
                return this.name + ' ' + this.fatherName + ' ' + this.surname;
            } else {
                return this.name + ' ' + this.surname;
            }
        }
    };
}

const a = createPerson("Вася", "Пупкін");
const b = createPerson("Ганна", "Іванова");
const c = createPerson("Єлизавета", "Петрова");

console.log(a.getFullName()); // Вася Пупкін
a.fatherName = 'Іванович';
console.log(a.getFullName()); // Вася Іванович Пупкін

console.log(b.getFullName()); // Ганна Іванова





function createPersonClosure(name, surname) {
    let age, fatherName;

    function getName() {
        return name;
    }

    function getSurname() {
        return surname;
    }

    function getFatherName() {
        return fatherName;
    }

    function getAge() {
        return age;
    }

    function getFullName() {
        return name + ' ' + (fatherName ? fatherName + ' ' : '') + surname;
    }

    function setName(newName) {
        if (typeof newName === 'string' && /^[A-Z][a-z]*$/.test(newName)) {
            name = newName;
            return name;
        } else {
            return name;
        }
    }

    function setSurname(newSurname) {
        if (typeof newSurname === 'string' && /^[A-Z][a-z]*$/.test(newSurname)) {
            surname = newSurname;
            return surname;
        } else {
            return surname;
        }
    }

    function setFatherName(newFatherName) {
        if (typeof newFatherName === 'string' && /^[A-Z][a-z]*$/.test(newFatherName)) {
            fatherName = newFatherName;
            return fatherName;
        } else {
            return fatherName;
        }
    }

    function setAge(newAge) {
        if (typeof newAge === 'number' && newAge >= 0 && newAge <= 100) {
            age = newAge;
            return age;
        } else {
            return age;
        }
    }

    function setFullName(newFullName) {
        const parts = newFullName.split(' ');
        if (parts.length === 3) {
            const [newSurname, newName, newFatherName] = parts;
            if (/^[A-Z][a-z]*$/.test(newName) && /^[A-Z][a-z]*$/.test(newSurname) && /^[A-Z][a-z]*$/.test(newFatherName)) {
                surname = newSurname;
                name = newName;
                fatherName = newFatherName;
            }
        }
    }

    return {
        getName: getName,
        getSurname: getSurname,
        getFatherName: getFatherName,
        getAge: getAge,
        getFullName: getFullName,
        setName: setName,
        setSurname: setSurname,
        setFatherName: setFatherName,
        setAge: setAge,
        setFullName: setFullName
    };
}

const a = createPersonClosure("Вася", "Пупкін");
const b = createPersonClosure("Ганна", "Іванова");

console.log(a.getName());
a.setAge(15);
console.log(a.getAge()); // 15
a.setAge(150); // не працює
console.log(a.getAge()); // 15

b.setFullName("Петрова Ганна Миколаївна");
console.log(b.getFatherName()); // Миколаївна








function createPersonClosureDestruct({ name, surname, fatherName = '', age = 0 } = {}) {
    let _name = name;
    let _surname = surname;
    let _fatherName = fatherName;
    let _age = age;

    function getName() {
        return _name;
    }

    function getSurname() {
        return _surname;
    }

    function getFatherName() {
        return _fatherName;
    }

    function getAge() {
        return _age;
    }

    function getFullName() {
        return _name + ' ' + (_fatherName ? _fatherName + ' ' : '') + _surname;
    }

    function setName(newName) {
        if (typeof newName === 'string' && /^[A-Z][a-z]*$/.test(newName)) {
            _name = newName;
            return _name;
        } else {
            return _name;
        }
    }

    function setSurname(newSurname) {
        if (typeof newSurname === 'string' && /^[A-Z][a-z]*$/.test(newSurname)) {
            _surname = newSurname;
            return _surname;
        } else {
            return _surname;
        }
    }

    function setFatherName(newFatherName) {
        if (typeof newFatherName === 'string' && /^[A-Z][a-z]*$/.test(newFatherName)) {
            _fatherName = newFatherName;
            return _fatherName;
        } else {
            return _fatherName;
        }
    }

    function setAge(newAge) {
        if (typeof newAge === 'number' && newAge >= 0 && newAge <= 100) {
            _age = newAge;
            return _age;
        } else {
            return _age;
        }
    }

    function setFullName(newFullName) {
        const parts = newFullName.split(' ');
        if (parts.length === 3) {
            const [newSurname, newName, newFatherName] = parts;
            if (/^[A-Z][a-z]*$/.test(newName) && /^[A-Z][a-z]*$/.test(newSurname) && /^[A-Z][a-z]*$/.test(newFatherName)) {
                _surname = newSurname;
                _name = newName;
                _fatherName = newFatherName;
            }
        }
    }

    return {
        getName,
        getSurname,
        getFatherName,
        getAge,
        getFullName,
        setName,
        setSurname,
        setFatherName,
        setAge,
        setFullName
    };
}

const a = createPersonClosureDestruct(createPerson("Вася", "Пупкін"));
const b = createPersonClosureDestruct({ name: 'Миколай', age: 75 });

console.log(a.getName());
console.log(a.getAge()); 
console.log(b.getName());
console.log(b.getAge()); 





function isSorted(...args) {
    if (args.length <= 1) {
        return true;
    }

    for (let i = 1; i < args.length; i++) {
        if (typeof args[i] !== 'number' || args[i] <= args[i - 1]) {
            return false;
        }
    }

    return true;
}
console.log(isSorted(1, 2, 3, 4, 5)); 
console.log(isSorted(1, 3, 2, 4, 5)); 
console.log(isSorted(5, 4, 3, 2, 1));
console.log(isSorted(1, 2, 2, 4, 5)); 
console.log(isSorted(1)); 
console.log(isSorted()); 







const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isSorted(...args) {
    if (args.length <= 1) {
        return true;
    }

    for (let i = 1; i < args.length; i++) {
        if (typeof args[i] !== 'number' || args[i] <= args[i - 1]) {
            return false;
        }
    }

    return true;
}

function inputData() {
    let data = [];

    function inputNext() {
        rl.question('Enter a number (or "done" to finish): ', (answer) => {
            if (answer.toLowerCase() === 'done') {
                rl.close();
                console.log(`Entered data: ${data}`);
                console.log(`isSorted: ${isSorted(...data)}`);
            } else {
                const num = parseFloat(answer);
                if (!isNaN(num)) {
                    data.push(num);
                } else {
                    console.log('Invalid input. Please enter a number or "done" to finish.');
                }
                inputNext();
            }
        });
    }

    inputNext();
}

inputData();









function personForm(parent, person) {
    const nameInput = document.createElement('input');
    const surnameInput = document.createElement('input');
    const fatherNameInput = document.createElement('input');
    const ageInput = document.createElement('input');
    const fullNameInput = document.createElement('input');
    nameInput.setAttribute('placeholder', 'Ім\'я');
    surnameInput.setAttribute('placeholder', 'Прізвище');
    fatherNameInput.setAttribute('placeholder', 'По батькові');
    ageInput.setAttribute('placeholder', 'Вік');
    fullNameInput.setAttribute('placeholder', 'ПІБ');

    nameInput.value = person.getName();
    surnameInput.value = person.getSurname();
    fatherNameInput.value = person.getFatherName();
    ageInput.value = person.getAge();
    fullNameInput.value = person.getFullName();
    nameInput.oninput = () => {
        const newName = person.setName(nameInput.value);
        nameInput.value = newName;
        fullNameInput.value = person.getFullName();
    };

    surnameInput.oninput = () => {
        const newSurname = person.setSurname(surnameInput.value);
        surnameInput.value = newSurname;
        fullNameInput.value = person.getFullName();
    };

    fatherNameInput.oninput = () => {
        const newFatherName = person.setFatherName(fatherNameInput.value);
        fatherNameInput.value = newFatherName;
        fullNameInput.value = person.getFullName();
    };

    ageInput.oninput = () => {
        const newAge = person.setAge(parseInt(ageInput.value));
        ageInput.value = newAge;
    };

    fullNameInput.oninput = () => {
        person.setFullName(fullNameInput.value);
        const parts = fullNameInput.value.split(' ');
        if (parts.length === 3) {
            surnameInput.value = parts[0];
            nameInput.value = parts[1];
            fatherNameInput.value = parts[2];
        }
    };

   
    parent.appendChild(nameInput);
    parent.appendChild(surnameInput);
    parent.appendChild(fatherNameInput);
    parent.appendChild(ageInput);
    parent.appendChild(fullNameInput);
}


