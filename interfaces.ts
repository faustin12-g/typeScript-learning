export { }
function getFullName(person:Person)
{
    return `${person.firstName} ${person.lastName}`
}

let p = {
    firstName: 'Faustin',
    lastName: 'Nshimiyimana'
}

console.log(getFullName(p))

interface Person {
    firstName: string,
    lastName: string
}


interface Animal {
    name: string
}

interface Animal {
    type: string
}

function printanimal(animal: Animal)
{
    return `${animal.name}, is ${animal.type}`
}

let a = {
    name: 'Kangaroo',
    type: 'Mammal'
}

console.log(printanimal(a))