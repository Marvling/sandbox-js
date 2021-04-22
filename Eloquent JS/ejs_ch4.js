function remove(array, i) {
    return array.slice(0, index)
      .concat(array.slice(index + 1));
  }

function range1 (start, end, step=1){

    step = Math.abs(step)
    let counter = start
    const rangeArray = []

    if (end < start) {
        
        while (!(counter < end)) {
            rangeArray.push(counter)
            counter -= step
        }
    }else{

        while (!(counter > end)) {
            rangeArray.push(counter)
            counter += step
        }
    }

    return rangeArray
}


function sum1 (...numbers) {
    let recordedSum = 0
    
    for(number of numbers){
        recordedSum += number
    }

    return recordedSum
}

console.log(sum1(...range1(1,100)));

function reverseArray (arr){
    newArr = []

    for (let i = arr.length-1; i >= 0; i--) {
        const element = arr[i];
        newArr.push(element)
    }

    return newArr
}
function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
  }

testArr = [1,2,3]


function arrayToList(array) {
    let list = null;

    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list) {
    let newList = list
    const newArr = []

    while (newList.rest != null) {

       newArr.push(newList.value)
       newList = newList.rest
    }
    newArr.push(newList.value)

    return newArr
}

function prepend(element, list) {
    return {
        value: element,
        rest: list
    }
}

function nthListh(number) {

    let list = null;
    range = range1(1,number)
    

    for (let i = range.length - 1; i >= 0; i--) {
      list = {value: range[i], rest: list};
    }
    return list;
}

let obj = {here: {is: "an"}, object: 2};

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