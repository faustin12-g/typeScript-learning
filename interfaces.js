"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var p = {
    firstName: 'Faustin',
    lastName: 'Nshimiyimana'
};
console.log(getFullName(p));
function printanimal(animal) {
    return "".concat(animal.name, ", is ").concat(animal.type);
}
var a = {
    name: 'Kangaroo',
    type: 'Mammal'
};
console.log(printanimal(a));
