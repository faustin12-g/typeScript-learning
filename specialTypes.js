"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 87;
a = 'text';
var b = 'something';
b = 50;
if (typeof b === 'string')
    console.log(b.toUpperCase());
if (typeof b === 'number')
    console.log(Math.pow(b, 2));
function mFunc() {
    throw new Error('Something went wrong');
}
console.log(mFunc());
function voidfunc(a, b) {
    var sum = a + b;
}
console.log(voidfunc(2, 4));
var d;
var c;
