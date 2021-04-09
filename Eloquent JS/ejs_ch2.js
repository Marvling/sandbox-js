let triangle=''

function fonk1 (text)
    {while (text.length <= 7) {
        text += '#'
        console.log(text)
    }
}

function fonk2 () {
    let counter = 0
    let value = -1

    while (counter < 100) {

        value += 1
        counter += 1

        if (value % 3 == 0) {
            if(value % 5 == 0){
                console.log('fizzbuzz')
            }
            else{
                console.log('fizz')
            }
        }
        else if(value % 5 == 0){
            console.log('buzz')
        }
        else{
            console.log(value)
        }
    }     
        
}

function fonk21 (){
    for (let i = 1; i <= 100; i++) {
        let result =''
        if(i %3==0) result += 'fizz'
        if(i %5==0) result += 'buzz'
        console.log(result || i)       
    }
}

function fonk3(size) {

    for (let i = 0; i < size; i++) {
        let line = ''
        for (let k = 0; k < size; k++) {
          (k + i) % 2 == 0 ? line += '_' : line += '#';
        }
        line + "\n";  
        console.log(line)
    }

}

fonk3(12)
