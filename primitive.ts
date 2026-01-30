export{}
let country: string = 'Rwanda';
let year: number = 2026
let isRaining: boolean = false

console.log(`In ${country}, on ${year}, ${isRaining?" it is raining":" it is not raining"}`)

let x: string | null = 'name'
x = null

function sayHello(name: string): void{
    console.log('Hello ', name)
}

let y: unknown = 'name'
if(typeof y === 'string')
{
    y.toLowerCase()
}
else{
    console.log('The type of the variable does not allow to change case')
}