export {}

enum Color {
    Red,
    Green,
    Blue
}


enum Status {
    Pending= 'Pending',
    Approved= 'Approved',
    Rejected= 'Rejected'

}

console.log(Color.Blue)
console.log(Status.Rejected)

let Task: {name: string; duration: number; status: string}={name:'Learning', duration:23, status: Status.Approved}

console.log(Task)