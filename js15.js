function htmlTree(node) {
    let htmlString = `<${node.tagName}`;

    
    if (node.attrs) {
        for (let attr in node.attrs) {
            htmlString += ` ${attr}='${node.attrs[attr]}'`;
        }
    }

    htmlString += ">";

  
    if (node.children) {
        node.children.forEach(child => {
            if (typeof child === 'string') {
                htmlString += child; 
            } else {
                htmlString += htmlTree(child); 
            }
        });
    }

    htmlString += `</${node.tagName}>`;

    return htmlString;
}

const table = {
    tagName: 'table',
    attrs: {
        border: "1",
    },
    children: [
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["1x1"],
                },
                {
                    tagName: "td",
                    children: ["1x2"],
                },
            ]
        },
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["2x1"],
                },
                {
                    tagName: "td",
                    children: ["2x2"],
                },
            ]
        }
    ]
};

const result = htmlTree(table);
document.write(result);











function domTree(parent, node) {
    const element = document.createElement(node.tagName);

    
    if (node.attrs) {
        for (let attr in node.attrs) {
            element.setAttribute(attr, node.attrs[attr]);
        }
    }

    if (node.children) {
        node.children.forEach(child => {
            if (typeof child === 'string') {
                const textNode = document.createTextNode(child);
                element.appendChild(textNode);
            } else {
                domTree(element, child);
            }
        });
    }

   
    parent.appendChild(element);
}

const table = {
    tagName: 'table',
    attrs: {
        border: "1",
    },
    children: [
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["1x1"],
                },
                {
                    tagName: "td",
                    children: ["1x2"],
                },
            ]
        },
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["2x1"],
                },
                {
                    tagName: "td",
                    children: ["2x2"],
                },
            ]
        }
    ]
};

domTree(document.body, table);






function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
       
        return obj;
    }

    let copy;
    if (Array.isArray(obj)) {
        copy = [];
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepCopy(obj[i]);
        }
    } else {
        copy = {};
        for (let key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                copy[key] = deepCopy(obj[key]);
            }
        }
    }

    return copy;
}


const arr = [1, "string", null, undefined, {a: 15, b: 10, c: [1,2,3,4], d: undefined, e: true }, true, false];
const arr2 = deepCopy(arr);
console.log(arr2);


const table = {
    tagName: 'table',
    attrs: {
        border: "1",
    },
    children: [
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["1x1"],
                },
                {
                    tagName: "td",
                    children: ["1x2"],
                },
            ]
        },
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["2x1"],
                },
                {
                    tagName: "td",
                    children: ["2x2"],
                },
            ]
        }
    ]
};

const table2 = deepCopy(table);
console.log(table2);











function stringify(value) {
    function processValue(val) {
        if (typeof val === 'object' && val !== null) {
            if (Array.isArray(val)) {
                return '[' + val.map(item => processValue(item)).join(',') + ']';
            } else {
                const keys = Object.keys(val);
                return '{' + keys.map(key => `"${key}":${processValue(val[key])}`).join(',') + '}';
            }
        } else if (typeof val === 'string') {
            return '"' + val.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
        } else if (typeof val === 'undefined') {
            return 'null';
        } else {
            
            return String(val);
        }
    }

    return processValue(value);
}


const arr = [1, "string", null, undefined, {a: 15, b: 10, c: [1,2,3,4], d: undefined, e: true }, true, false];
const jsonString = stringify(arr);
console.log(jsonString);
console.log(JSON.parse(jsonString));
console.log(jsonString === JSON.stringify(arr));


const table = {
    tagName: 'table',
    attrs: {
        border: "1",
    },
    children: [
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["1x1"],
                },
                {
                    tagName: "td",
                    children: ["1x2"],
                },
            ]
        },
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["2x1"],
                },
                {
                    tagName: "td",
                    children: ["2x2"],
                },
            ]
        }
    ]
};

const jsonString2 = stringify(table);
console.log(jsonString2);
console.log(jsonString2 === JSON.stringify(table));










function getElementById(idToFind) {
    function walker(parent) {
        if (parent.id === idToFind) {
            throw parent; 
        }
        if (parent.children) {
            for (let i = 0; i < parent.children.length; i++) {
                walker(parent.children[i]); 
            }
        }
    }

    try {
        walker(document.body); 
    } catch (element) {
        return element; 
    }

   
    return null;
}


console.log(foundElement); 
