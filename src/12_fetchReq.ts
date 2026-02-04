interface Todo{
    userId: number;
    id: number;
    title : string,
    completed:  boolean
}


const fecthData = async() =>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        if(!response.ok) {
            throw new Error(`HTTP Error ${response.status}`)
        }
        const data: Todo = response.json()

    } catch (error: any) {
        
    }
}