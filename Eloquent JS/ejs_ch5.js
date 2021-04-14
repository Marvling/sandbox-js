// Higher Order Functions

const arrays = [[0, 1], [2, 3], [4, 5]]
const flattened = arrays.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue)
)


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
    
    newArr == arr ? true : false
}

function myEvery3 (arr) {
    let newArr = arr.filter(n => n < 10);

    console.log(arr);
    console.log(newArr);

    if (newArr == arr) {
        return true
    }
    else{
        return false
    }
}

console.log(myEvery2([1,2,3,4,5,6], n => n < 10));




// console.log(myEvery2([1, 3, 1, 5, 9], n => n < 10))