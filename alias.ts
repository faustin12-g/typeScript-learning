type Product = {
    name: string,
    price: number,
    inStock?: boolean
}

interface User {
    username: string,
    email: string,
    age?:number
}

interface Admin extends User {
    isAdmin: boolean
}

let phone: Product =
{
    name: 'iPhone',
    price: 999,
    inStock: true

}

function printProduct(product: Product): void
{
    console.log(`This ${product.name} is ${product.price} and it is ${product.inStock?'in':'not in'} stock currently`)
}
printProduct(phone)


interface Shape 
{
    area(): number
}

class Circle implements Shape{
    constructor( public radius: number) {}

    area(): number {
        return Math.PI * this.radius * this.radius
    }

}

const c1 = new Circle(40)

console.log(c1.area())