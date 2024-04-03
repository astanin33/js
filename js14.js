function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fatherName = '';

    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
}

const a = new Person("Вася", "Пупкін");
const b = new Person("Ганна", "Іванова");
const c = new Person("Єлизавета", "Петрова");

console.log(a.getFullName()); 
a.fatherName = 'Іванович'; 

console.log(b.getFullName()); 





function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fatherName = '';
}

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
};

const a = new Person("Вася", "Пупкін");
const b = new Person("Ганна", "Іванова");
const c = new Person("Єлизавета", "Петрова");

console.log(a.getFullName());
a.fatherName = 'Іванович'; 

console.log(b.getFullName()); 








function Store(reducer, initialState) {
    var state = initialState;
    var cbs = [];

    this.subscribe = function (cb) {
        cbs.push(cb);
        return function unsubscribe() {
            cbs = cbs.filter(c => c !== cb);
        };
    };

    this.dispatch = function (action) {
        state = reducer(state, action);
        cbs.forEach(cb => cb());
    };

    this.getState = function () {
        return state;
    };
}
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}


var store = new Store(reducer, 0);

var unsubscribe = store.subscribe(function () {
    console.log('Поточний стан:', store.getState());
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' }); 


unsubscribe();


store.subscribe(function () {
    console.log('Оновлений стан:', store.getState());
});
store.dispatch({ type: 'DECREMENT' }); 





function Password(parent, open) {
    var input = document.createElement('input');
    input.type = open ? 'text' : 'password';

    var toggleBtn = document.createElement('button');
    toggleBtn.textContent = open ? 'Hide' : 'Show';
parent.appendChild(input);
    parent.appendChild(toggleBtn);
    input.style.marginRight = '5px';
    this.setValue = function(value) {
        input.value = value;
    };

    this.getValue = function() {
        return input.value;
    };

    this.setOpen = function(value) {
        input.type = value ? 'text' : 'password';
        toggleBtn.textContent = value ? 'Hide' : 'Show';
        if (this.onOpenChange) this.onOpenChange(value);
    };

    this.getOpen = function() {
        return input.type === 'text';
    };
    input.addEventListener('input', function() {
        if (this.onChange) this.onChange(input.value);
    }.bind(this));

    toggleBtn.addEventListener('click', function() {
        this.setOpen(!this.getOpen());
    }.bind(this));
}

let p = new Password(document.body, true);

p.onChange = data => console.log(data);
p.onOpenChange = open => console.log(open);

p.setValue('qwerty');
console.log(p.getValue());

p.setOpen(false);
console.log(p.getOpen());










var loginForm = document.createElement('form');
document.body.appendChild(loginForm);
var loginInput = document.createElement('input');
loginInput.type = 'text';
loginInput.placeholder = 'Логін';
loginForm.appendChild(loginInput);

var password = new Password(loginForm, false); 
password.setValue('');
password.onChange = function(value) {
    updateLoginButton();
};


var loginButton = document.createElement('button');
loginButton.textContent = 'Увійти';
loginButton.disabled = true;
loginForm.appendChild(loginButton);


function updateLoginButton() {
    if (loginInput.value.trim() !== '' && password.getValue().trim() !== '') {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
}

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    var username = loginInput.value;
    var passwordValue = password.getValue();
    console.log('Логін:', username);
    console.log('Пароль:', passwordValue);
    
});










function LoginForm(parent) {
    var loginForm = document.createElement('form');
    parent.appendChild(loginForm);

    var loginInput = document.createElement('input');
    loginInput.type = 'text';
    loginInput.placeholder = 'Логін';
    loginForm.appendChild(loginInput);

    var password = new Password(loginForm, false);

    var loginButton = document.createElement('button');
    loginButton.textContent = 'Увійти';
    loginButton.disabled = true;
    loginForm.appendChild(loginButton);

    this.setLogin = function(value) {
        loginInput.value = value;
    };

    this.getLogin = function() {
        return loginInput.value;
    };

    this.setPassword = function(value) {
        password.setValue(value);
    };

    this.getPassword = function() {
        return password.getValue();
    };

    
    function updateLoginButton() {
        if (loginInput.value.trim() !== '' && password.getValue().trim() !== '') {
            loginButton.disabled = false;
        } else {
            loginButton.disabled = true;
        }
    }

   
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var username = loginInput.value;
        var passwordValue = password.getValue();
        console.log('Логін:', username);
        console.log('Пароль:', passwordValue);
    });

    loginInput.addEventListener('input', function() {
        updateLoginButton();
    });

    password.onChange = function() {
        updateLoginButton();
    };
}

// Використання:

var loginFormContainer = document.body;
var loginForm = new LoginForm(loginFormContainer);

loginForm.setLogin('user@example.com');
loginForm.setPassword('password');









function Password(parent, open) {
    var input = document.createElement('input');
    input.type = open ? 'text' : 'password';

    parent.appendChild(input);

    this.setValue = function(value) {
        input.value = value;
    };

    this.getValue = function() {
        return input.value;
    };

    this.setOpen = function(value) {
        input.type = value ? 'text' : 'password';
        if (!value) {
            if (confirm('Ви впевнені, що хочете приховати пароль?')) {
                input.nextSibling.style.display = 'inline-block';
            }
        } else {
            input.nextSibling.style.display = 'none';
        }
    };

    this.getOpen = function() {
        return input.type === 'text';
    };

    input.addEventListener('input', function() {
        if (this.onChange) this.onChange(input.value);
    }.bind(this));
}

function PasswordVerify(parent) {
    var password1 = new Password(parent, false);
    var password2 = document.createElement('input');
    password2.type = 'password';
    parent.appendChild(password2);

    function updatePasswords() {
        var value1 = password1.getValue();
        var value2 = password2.value;

        if (value1 !== value2) {
            password1.element.style.borderColor = 'red';
            password2.style.borderColor = 'red';
        } else {
            password1.element.style.borderColor = '';
            password2.style.borderColor = '';
        }
    }

    password1.onChange = function() {
        updatePasswords();
    };

    password2.addEventListener('input', function() {
        updatePasswords();
    });

    password1.setOpen(false);
}

