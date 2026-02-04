import axios from "axios"
import type { AxiosResponse } from "axios";

// 1) Basic way to get data using axios
axios.get("https://www.muftitariqmasood.com")
.then(repsonse=>{
    console.log(repsonse)
})


interface Todo{
    userId: number;
    id: number;
    title : string,
    completed:  boolean
}


const fecthData = async() =>{
    try {
        const response : AxiosResponse<Todo> = 
            axios.get("https://jsonplaceholder.typicode.com/todos/1")

        console.log("Response",response.data)
    } catch (error: any) {
        if(axios.isAxiosError(error)) {
            console.log("Axios error", error.message);
            if(error.response) {
                console.log("Err response", error.response)
            }
        }
    }
}