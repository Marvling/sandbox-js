const person = {
    name: 'kenan',
    age: 34,
    power: 4,
    speed: 2,
    greet: function (){
        return `hello my name is ${this.name}`
    }

}

person.attack_weak = function (){
    return `${this.name} attackts with power of ${this.power/2}`
}

person.attack = function(){
    return `${this.name} attackts with power of ${this.power}`
}

console.log(person.greet());
console.log(person);

delete person.attack_weak;

for (i in person){
    console.log(`${i} : ${person[i]}`)
}
let fonk = function(a,b){
    return a + b
}

console.log(Object.getPrototypeOf(fonk));