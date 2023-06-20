import { ITask } from "./types/tasks";

const basePath = 'http://localhost:3001';

export const getAllTodos = async (): Promise<ITask[]> => {
    console.log("hello world");
    
    const res = await fetch(`${basePath}/todos`)
    const todos = await res.json()
    return todos
}