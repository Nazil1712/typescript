// Generic functions
function wrapInArray<T> (item : T): T[] {
    return [item]
}

wrapInArray("Masala")
wrapInArray(45)
wrapInArray({flavour: "Ginger"})


function pair<A, B> (a: A, b: B): [A,B] {
    return [a,b]
}


// Generic interfaces
interface Box<T> {
    content: T
}

const numberBox: Box<number> = {
    content: 20
}

const stringBox: Box<string> = {
    content: "My Box"
}


// Promise
interface ApiPromise<T> {
    status: number,
    data: T
}

const res: ApiPromise<{flavour: string}> = {
    status : 200,
    data: {flavour : "masala"}
}