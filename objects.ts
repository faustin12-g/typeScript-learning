let Book: {
    title: string; author: string; year: number; isPublished?:boolean
}
Book = {
    title: 'the little prince',
    author: 'Faustin',
    year: 2026
}

console.log(Book)


let user : {
    name: string; 
    year: number
    address: {city:string; country:string; street: number}
} = {name:'Faustin',  year: 2002, address:{city:'Kigali', country: 'Rwanda', street: 499}}

console.log(user)

type student = {
    name: string;
    year: number;
    isScholar?: boolean
}

let myStudent: student ={
    name: 'Faustin',
    year: 4,
    isScholar: false
}

console.log(myStudent)