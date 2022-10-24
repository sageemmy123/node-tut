const amount = 9

if (amount < 10){
    console.log('small number');
}
else{
    console.log('large number');
}

console.log(`Node JS tutorial`)


//Modules
const john = 'john'
const peter = 'peter'
const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

sayHi('susan')
sayHi(john)
sayHi(peter)

//Modules exports and require
const names = require ('./names')
const sayHi = require('./utils')


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
