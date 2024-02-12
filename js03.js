let str = "cANBerRa";
let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
console.log(result); // Canberra

let str = "Це рядок з кількома словами";
let wordsCount = str.split(" ").length;
console.log(wordsCount); // 5

let str = "Було жарко. Василь пив пиво вприкуску з креветками";
let words = str.split(" ");
for (let i = 0; i < words.length; i++) {
    if (words[i] === "пиво") {
        words[i] = "чай";
    }
}
let result = words.join(" ");
console.log(result); 

let str = "";
let startIndex = str.indexOf("<");
let endIndex = str.indexOf(">");
if (startIndex !== -1 && endIndex !== -1) {
    let result = str.slice(0, startIndex) + str.slice(endIndex + 1);
    console.log(result); 
} else {
    console.log("Тег не знайдено у рядку");
}

const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

let userInput = prompt("Будь ласка, введіть текст з посиланням на YouTube:");

let match = userInput.match(youtubeRegex);
if (match) {
    let videoId = match[1];
    let embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    document.write(embedCode);
} else {
    document.write("Посилання на YouTube не знайдено у введеному тексті.");
}

let userInput = prompt("Будь ласка, введіть рядок (використовуйте \\n як маркер нового рядка):");
let multiLineString = userInput.split("\\n").join("\n");
console.log(multiLineString); 


var name = prompt("Будь ласка, введіть своє ім'я:");
if (name != null) {
    var greeting = "Привіт, " + name + "! Як справи?";
 alert(greeting);
} else {
    alert("Схоже, ви не ввели ім'я. Привітання не відправлено.");
}
