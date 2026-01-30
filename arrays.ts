let arr: number[] = [1,3,2,7]
let strs: Array<string> = ['Faustin ', 'is ', 'bad ', 'at ', 'learning ', 'and ', 'adapting ', 'codes']

// arr.push('a')
// strs.push(true)

let arr1: ReadonlyArray<number> = [1,2,3]
// arr1.push(9)

const sum = arr.reduce((a,b)=>a+b, 0)

console.log(sum)

console.log(strs.join(''))