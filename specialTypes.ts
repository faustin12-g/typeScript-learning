import { error } from "console"

export {}
let a: any = 87
a='text'

let b: unknown = 'something'
b = 50

if(typeof b === 'string') console.log(b.toUpperCase())
if(typeof b === 'number') console.log(Math.pow(b, 2))


function mFunc(): never
{
    throw new Error('Something went wrong')
}
try
{
    console.log(mFunc())
}
catch(error)
{
    console.log('Error: ', error.message)
}


function voidfunc(a: number, b: number): void
{
    const sum = a+b;
}

console.log(voidfunc(2,4))

let d: null
let c: undefined
