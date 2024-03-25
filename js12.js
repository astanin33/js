function makeProfileTimer() {
    const start = performance.now();
    return function() {
        const end = performance.now();
        return end - start;
    };
}

const timer = makeProfileTimer();
alert('Вимірюємо час роботи цього alert');  
alert(timer()); 

const timer2 = makeProfileTimer();
prompt('');
alert(`Час роботи двох alert та одного prompt ${timer()}`);
alert(`Час роботи prompt та попереднього alert ${timer2()}`);





function makeSaver(func) {
    let result;
    let called = false;

    return function() {
        if (!called) {
            result = func();
            called = true;
        }
        return result;
    };
}

let saver = makeSaver(Math.random);
let value1 = saver();
let value2 = saver();
alert(`Random: ${value1} === ${value2}`); 

let saver2 = makeSaver(() => {
    console.log('saved function called');
    return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random() * 6)];
});
let value3 = saver2();
let value4 = saver2();
console.log(value3 === value4); 
let namePrompt = prompt.bind(window, 'Як тебе звуть?');
let nameSaver = makeSaver(namePrompt);
alert(`Привіт! Prompt ще не було!`);
alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`);
alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`);









function myBind(func, context, defaultArgs) {
    return function(...args) {
        const finalArgs = defaultArgs.map((val, index) => typeof val !== 'undefined' ? val : args.shift());
        return func.apply(context, finalArgs.concat(args));
    };
}

let pow5 = myBind(Math.pow, Math, [, 5]);
console.log(pow5(2)); 
console.log(pow5(4)); 

let cube = myBind(Math.pow, Math, [, 3]);
console.log(cube(3)); 
let chessMin = myBind(Math.min, Math, [, 4, , 5, , 8, , 9]);
console.log(chessMin(-1, -5, 3, 15)); 
let zeroPrompt = myBind(prompt, window, [undefined, "0"]);
let someNumber = zeroPrompt("Введіть число");
console.log(someNumber);
const bindedJoiner = myBind((...params) => params.join(''), null, [, 'b', , , 'e', 'f']);
console.log(bindedJoiner('a', 'c', 'd') === 'abcdef');
console.log(bindedJoiner('1', '2', '3') === '1b23ef'); 








function checkResult(original, validator){
    function wrapper(...params){
        let result = original.call(this, ...params);
        while (!validator(result)) {
            result = original.call(this, ...params);
        }
        return result;
    }
    
    return wrapper;
}



const numberPrompt = checkResult(prompt, x => !isNaN(+x));
let number = +numberPrompt.call(prompt, "Введіть число", "0");

const gamePrompt = checkResult(prompt, x => ['камінь', 'ножиці', 'папір'].includes(x.toLowerCase()));
const turn = gamePrompt.call(prompt, "Введіть щось зі списку: 'камінь', 'ножиці', 'папір'");

function RandomHigh() {
    return checkResult(Math.random, x => x >= 0.5 && x <= 1)();
}
function AlwaysSayYes() {
    return checkResult(confirm, x => x === true)();
}
function respectMe() {
    return checkResult(prompt, x => x.trim() !== '')("Введіть щось:");
}
