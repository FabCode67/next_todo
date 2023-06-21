import { ITask } from "./types/tasks";

const basePath = 'http://localhost:3001';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${basePath}/todo`,{cache: 'no-store'})
    const todos = await res.json()
    return todos
}

export const addTodo = async (todo:ITask): Promise<ITask>=> {
    const res = await fetch(`${basePath}/todo`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(todo)

    })

    const newTodo = await res.json()
    return newTodo
}



export const updateChacked = async (task: ITask): Promise<ITask> => {
    const res = await fetch(`${basePath}/todo/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });
  
    const updatedTodo = await res.json();
    return updatedTodo;
  };
  
  
  export const deleteTodo = async (id: string): Promise<void> => {
    await fetch(`${basePath}/todo/${id}`, { method: 'DELETE' });
  }

  export const handleUpdateTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${basePath}/todo/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    })

    const updatedTodo = await res.json();
    return updatedTodo;
}
