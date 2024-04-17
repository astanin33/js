
async function jsonPost(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}

let nextMessageId = 0;


async function sendMessage(nick, message) {
    await jsonPost("http://students.a-level.com.ua:10012", {func: 'addMessage', nick, message});
}

async function getMessages() {
    const response = await jsonPost("http://students.a-level.com.ua:10012", {func: 'getMessages', messageId: nextMessageId});
    const messages = response.messages;
    nextMessageId = response.nextMessageId;
    return messages;
}


async function checkMessages() {
    const messages = await getMessages();
    messages.forEach(msg => {
        console.log(`${msg.nick}: ${msg.message}`);
    });
}


async function checkLoop() {
    while (true) {
        await checkMessages();
        await delay(2000); 
    }
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
checkLoop();















function domEventPromise(element, eventName) {
    function executor(resolve) {
        function eventHandler(event) {
            
            resolve(event);
            element.removeEventListener(eventName, eventHandler);
        }
        element.addEventListener(eventName, eventHandler);
    }
    return new Promise(executor);
}

const button = document.getElementById('knopka'); 
domEventPromise(button, 'click')
    .then(event => console.log('Подія click відбулася', event));








   
async function addMessage(nick, message) {
    try {
        const response = await jsonPost("http://students.a-level.com.ua:10012", {func: 'addMessage', nick, message});
        return response.nextMessageId; 
    } catch (error) {
        console.error('Помилка при додаванні повідомлення:', error);
        throw error; 
    }
}


async function getMessages(messageId) {
    try {
        const response = await jsonPost("http://students.a-level.com.ua:10012", {func: 'getMessages', messageId});
        return response.data; 
    } catch (error) {
        console.error('Помилка при отриманні повідомлень:', error);
        throw error; 
    }
}








(async () => {
    try {
     
        const nextMessageId = await addMessage("Anon", "Hello, world!");
        console.log('Нове значення nextMessageId:', nextMessageId);
        const messages = await getMessages(0);
        console.log('Отримані повідомлення:', messages);
    } catch (error) {
        console.error('Помилка:', error);
    }
})();
