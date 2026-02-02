/* Forcefull type assertion */

let response: any = "42"

let numericLength: number = (response as string).length
console.log(numericLength)

type Book = {
    name: string
}

let bookString = '{"name":"Whispers of Shaytan"}'
// let bookObject = JSON.parse(bookString) // You won't see suggestions in console (bookObject.name)
let bookObject = JSON.parse(bookString) as Book  /*  Here you will be able to see suggestions */

console.log(bookObject)


// This (to use as HTMLInputElement) is basically safeGuarding - used in production
const inputElement = document.getElementById("myId") as HTMLInputElement



/* Difference between unknown and any */
let value : any

value = "Hey there"
value = [1,2,3,4,5,6]
value = 1.25
value = true
value.toUpperCase() // No errors


let myValue2 : unknown

myValue2 = "Hey there"
myValue2 = [1,2,3,4,5,6]
myValue2 = 1.25
myValue2 = true
// myValue2.toUpperCase() // errors !


// hence applying type guards
if(typeof myValue2 === 'string') {
    myValue2.toUpperCase() // No errors
}



/* Guard checks */

try {
    
} catch (error) {
    if(error instanceof Error) {
        console.log(error.message)
    }

    console.log("Error => ", error)
}


const data: unknown = "Chai aur code"
const strData: string = data as string

// type Role = 'admin' | "user" 
// When you will hover on line 82, then you would be able to see type as never

type Role = 'admin' | "user" | "superadmin" 
// When you will hover on line 82, then you would be able to see type as superadmin

function redirectBasedonRoles(role: Role): void {
    if(role == 'admin') {
        console.log("Redirecting to admin dashborad")
        return
    }

    if(role == "user") {
        console.log("Redirecting to user dashborad")
        return
    }

    role; // (Line number 82) 😂
}