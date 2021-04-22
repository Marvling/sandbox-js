// Higher Order Functions

function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
}
  
    return true;
}

const arrays = [[0, 1], [2, 3], [4, 5,[6,7]]]
const flatener = (accumulator, currentValue) => accumulator.concat(currentValue)

function myLooper (value, test, update, body){
    
    while (!test(value)) {
        value = update(value)
    }
        body(value)
}

function myEvery1 (arr, test) {
    const total = []

    for (const element of arr) {
        if(test(element)){
            total.push(1)
        }else{
            total.push(0)
        }
    }

    if (total.some(n => n < 1)) {
        return false
    }else{
        return true
    }
}

function myEvery2 (arr, test) {
    const newArr = arr.filter(test)
    console.log(newArr);
    
    return deepEqual(arr, newArr)
}
  
function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {return script;}
    }
    return null;
}

console.log(characterScript(121));

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {

        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);

        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
}
return counts;
}

function textScripts(text) {
let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
}).filter(({name}) => name != "none");

let total = scripts.reduce((n, {count}) => n + count, 0);
if (total == 0) return "No scripts found";

return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
}).join(", ");
}