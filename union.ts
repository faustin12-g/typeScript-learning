let x: string | number;
function known(a: string | number): void
{
    if( typeof a === 'string')
    {
        console.log(`The type of ${a} is ${typeof a}`)
    }
    else
    {
        console.log(`The type of ${a} is ${typeof a}`)
    }
}

known(12)
known('Faustin')

type status = 'Success' | 'Error' | 'Loading'

let userstatus: status = 'Loading'
console.log('Users is ', userstatus, '....')

let arr: (string | number)[] = [1, 'Fuastin', true]