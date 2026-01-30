import { toUnicode } from "node:punycode"

let coordinate: [number, number]
let user: [string, number, boolean]

coordinate = [9.8, 908]
// user = [23, true, 'Faustin']
coordinate.push(89)

function printuser(user: [string, number, boolean]): string
{
    return `${user[0]} is student and is ${user[1]} years old`
}