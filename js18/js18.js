const delay = ms => new Promise(ok => setTimeout(ok, ms));

async function trafficLight() {
    const greenLight = document.getElementById('green');
    const yellowLight = document.getElementById('yellow');
    const redLight = document.getElementById('red');

    while (true) {
      
        greenLight.style.backgroundColor = 'green';
        yellowLight.style.backgroundColor = 'gray';
        redLight.style.backgroundColor = 'gray';
        await delay(3000); 

        greenLight.style.backgroundColor = 'gray';
        yellowLight.style.backgroundColor = 'yellow';
        redLight.style.backgroundColor = 'gray';
        await delay(1000); 

       
        greenLight.style.backgroundColor = 'gray';
        yellowLight.style.backgroundColor = 'gray';
        redLight.style.backgroundColor = 'red';
        await delay(2000); 
    }
}
trafficLight();







const delay = ms => new Promise(ok => setTimeout(ok, ms));

async function trafficLight(greenElement, yellowElement, redElement, greenTime, yellowTime, redTime) {
    while (true) {
       
        greenElement.style.backgroundColor = 'green';
        yellowElement.style.backgroundColor = 'gray';
        redElement.style.backgroundColor = 'gray';
        await delay(greenTime);

        greenElement.style.backgroundColor = 'gray';
        yellowElement.style.backgroundColor = 'yellow';
        redElement.style.backgroundColor = 'gray';
        await delay(yellowTime);

        greenElement.style.backgroundColor = 'gray';
        yellowElement.style.backgroundColor = 'gray';
        redElement.style.backgroundColor = 'red';
        await delay(redTime);
    }
}

const greenLight = document.getElementById('green');
const yellowLight = document.getElementById('yellow');
const redLight = document.getElementById('red');
trafficLight(greenLight, yellowLight, redLight, 3000, 1000, 2000);










async function speedtest(getPromise, count, parallel = 1) {
    const start = Date.now();

    let totalQueryTime = 0;
    let totalParallelTime = 0;

    for (let i = 0; i < count; i++) {
        const startParallel = Date.now();
        const promises = [];

        for (let j = 0; j < parallel; j++) {
            promises.push(getPromise());
        }

        await Promise.all(promises);

        const endParallel = Date.now();
        totalParallelTime += endParallel - startParallel;

        const parallelDuration = totalParallelTime / (i + 1);

        const queryDuration = totalParallelTime / (parallel * (i + 1));

        const parallelSpeed = (parallel * (i + 1)) / totalParallelTime;
        const querySpeed = (i + 1) / totalParallelTime;

        totalQueryTime += queryDuration;
    }

    const end = Date.now();
    const duration = end - start;

    return {
        duration,
        querySpeed,
        queryDuration,
        parallelSpeed,
        parallelDuration
    };
}


speedtest(() => delay(1000), 10, 10).then(result => console.log(result));








function jwtDecode(token) {
    try {
        if (!token || typeof token !== "string") return undefined; 
        const parts = token.split('.');
        
       
        if (parts.length !== 3) return undefined;
        
        const decoded = atob(parts[1]); 
        
        const decodedJSON = JSON.parse(decoded); 
        
        return decodedJSON; 
    } catch (error) {
        return undefined; 
    }
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzIyMDVhZWI3NGUxZjVmMmVjMWEzMjAiLCJsb2dpbiI6InRlc3Q0NTciLCJhY2wiOlsiNjMyMjA1YWViNzRlMWY1ZjJlYzFhMzIwIiwidXNlciJdfSwiaWF0IjoxNjY4MjcyMTYzfQ.rxV1ki9G6LjT2IPWcqkMeTi_1K9sb3Si8vLB6UDAGdw";

console.log(jwtDecode(token)); 
//{
//  "sub": {
//    "id": "632205aeb74e1f5f2ec1a320",
//    "login": "test457",
//    "acl": [
//      "632205aeb74e1f5f2ec1a320",
//      "user"
//    ]
//  },
//  "iat": 1668272163
//}

try {
    console.log(jwtDecode());         
    console.log(jwtDecode("дічь"));  
    console.log(jwtDecode("ey.ey.ey"));  
    
    console.log('до сюди допрацювало, а значить jwtDecode не матюкався в консоль червоним кольором')
} finally {
    console.log('ДЗ, мабуть, закінчено')
}
