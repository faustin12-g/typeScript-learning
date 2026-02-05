function myFunc(name: string,  country: string = 'Rwanda', age?:number)
{
    return `Name:${name}, from: ${country} ${age?'Age:':''} ${age}`
}

console.log(myFunc('Faustin', undefined, 90))

type addNum = (a:number, b: number) => number


function func1(a: number, b: number, callback: addNum)
{
    return callback(a,b)
}

function add(a: number, b: number): number
{
    return a+b
}

console.log(add(4,3))

function sumUp(...nums: number[]): number
{
    return nums.reduce((a,b)=>a+b,0)
}
console.log('Their sum:', sumUp(1,2,3,4,5,6,7,8,9))